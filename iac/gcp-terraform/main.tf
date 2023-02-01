terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "4.41.0"
    }
  }
}

provider "google" {
  project = var.project_name
  region  = var.location
}

data "google_secret_manager_secret_version" "server_url" {
  secret = local.server_url
}

data "google_secret_manager_secret_version" "vidispine_url" {
  secret = local.vidispine_url
}

resource "google_project_service" "enabled_api" {
  for_each           = toset(local.enabled_apis)
  service            = each.value
  disable_on_destroy = false
  project            = var.project_name

}

resource "null_resource" "prep" {
  depends_on = [
    google_project_service.enabled_api
  ]
}

resource "google_cloud_run_service" "default" {
  name     = local.cloud_run_service_name
  location = var.location
  project  = var.project_name

  metadata {
    annotations = {
      "run.googleapis.com/ingress" : "internal-and-cloud-load-balancing"
    }
  }

  template {
    spec {
      containers {
        image = var.container_image
        ports {
          container_port = 3000
        }
        resources {
          limits = {
            "memory" = "2Gi"
            "cpu"    = "4"
          }
        }
        env {
          name  = "REACT_APP_SERVER_URL_PARAM"
          value = data.google_secret_manager_secret_version.server_url.secret_data
        }
        env {
          name  = "REACT_APP_VIDISPINE_URL"
          value = data.google_secret_manager_secret_version.vidispine_url.secret_data
        }
      }
    }
    metadata {
      annotations = {
        # # Use the VPC Connector
        # "run.googleapis.com/vpc-access-connector" = var.vpc_connectors

        # # all egress from the service should go through the VPC Connector
        "run.googleapis.com/vpc-access-egress" = "private-ranges-only"

        "run.googleapis.com/vpc-access-connector" = var.environment == "staging"? var.vpc_connector :"projects/${var.project_name}/locations/${var.location}/connectors/mam-vpc-conn-eu-west1"
        # set min/max instances for the revision
        "autoscaling.knative.dev/minScale" = "1"
        "autoscaling.knative.dev/maxScale" = "100"

      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
  autogenerate_revision_name = true
}

data "google_iam_policy" "noauth" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
}

resource "google_cloud_run_service_iam_policy" "noauth" {
  location = google_cloud_run_service.default.location
  project  = google_cloud_run_service.default.project
  service  = google_cloud_run_service.default.name

  policy_data = data.google_iam_policy.noauth.policy_data
}

resource "google_compute_global_address" "default" {
  name = local.external_ip_address
}

resource "google_compute_region_network_endpoint_group" "cloudrun_neg" {
  provider              = google-beta
  project               = var.project_name
  name                  = local.neg_name
  network_endpoint_type = "SERVERLESS"
  region                = var.location
  cloud_run {
    service = google_cloud_run_service.default.name
  }
}

resource "google_compute_region_network_endpoint_group" "function_neg" {
  provider              = google-beta
  project               = var.project_name
  name                  = local.functions_neg_name
  network_endpoint_type = "SERVERLESS"
  region                = var.location

  cloud_run {
    url_mask = "/functions/<service>"
  }
}

resource "google_compute_backend_service" "default" {
  name            = local.backend_service
  project         = var.project_name
  protocol        = "HTTP"
  port_name       = "http"
  timeout_sec     = 30
  security_policy = google_compute_security_policy.security_policy.id

  backend {
    group = google_compute_region_network_endpoint_group.cloudrun_neg.id
  }
}

resource "google_compute_backend_service" "functions" {
  name            = local.functions_backend_service
  project         = var.project_name
  protocol        = "HTTP"
  port_name       = "http"
  timeout_sec     = 30
  security_policy = google_compute_security_policy.security_policy.id
  enable_cdn      = true
  backend {
    group = google_compute_region_network_endpoint_group.function_neg.id
  }
}

resource "google_compute_url_map" "default" {
  name            = local.url_map
  project         = var.project_name
  default_service = google_compute_backend_service.default.id
  host_rule {
    hosts        = ["*"]
    path_matcher = "functions"
  }
  path_matcher {
    name            = "functions"
    default_service = google_compute_backend_service.default.id

    path_rule {
      paths   = ["/functions/*"]
      service = google_compute_backend_service.functions.id
    }
  }
}

resource "google_compute_target_https_proxy" "default" {
  name    = local.https_proxy
  project = var.project_name
  url_map = google_compute_url_map.default.id
  ssl_certificates = [
    local.cert
  ]
}

resource "google_compute_global_forwarding_rule" "default" {
  name       = local.lb_name
  project    = var.project_name
  target     = google_compute_target_https_proxy.default.id
  port_range = "443"
  ip_address = google_compute_global_address.default.address
}

resource "google_compute_url_map" "https_redirect" {
  name = local.https_redirect_urlmap
  project = var.project_name

  default_url_redirect {
    https_redirect         = true
    redirect_response_code = "MOVED_PERMANENTLY_DEFAULT"
    strip_query            = false
  }
}

resource "google_compute_target_http_proxy" "https_redirect" {
  name    = local.http_proxy
  project = var.project_name
  url_map = google_compute_url_map.https_redirect.id
}

resource "google_compute_global_forwarding_rule" "https_redirect" {
  name = local.https_redirect_lb
  project = var.project_name

  target     = google_compute_target_http_proxy.https_redirect.id
  port_range = "80"
  ip_address = google_compute_global_address.default.address
}

resource "google_compute_security_policy" "security_policy" {
  name = local.cloud_armor_policy
  project = var.project_name

  rule {
    action   = "allow"
    priority = "0"
    match {
      versioned_expr = "SRC_IPS_V1"
      config {
        src_ip_ranges = var.whitelisted_ips
      }
    }
    description = "Allow Whitelisted IPs"
  }

  rule {
    action   = "deny(403)"
    priority = "2147483647"
    match {
      versioned_expr = "SRC_IPS_V1"
      config {
        src_ip_ranges = ["*"]
      }
    }
    description = "Deny All"
  }
}

resource "google_vpc_access_connector" "connector" {
  for_each = var.vpc_connectors
  name     = each.value.name
  provider = google-beta
  region   = each.value.region
  project  = var.project_name
  #ip_cidr_range = each.value.ip_range #"10.8.0.0/28"
  max_throughput = each.value.max_throughput // e2 micro 200 - 1000 -- e2-standart-4 3200 16000 Mbps
  min_throughput = each.value.min_throughput
  subnet {
    name       = each.value.subnet_name
    project_id = var.infra_project_id
  }
  depends_on    = [null_resource.prep]
  machine_type  = each.value.machine_type
  min_instances = each.value.min_instances
  max_instances = each.value.max_instances
}

resource "google_artifact_registry_repository" "mam-frontend" {
  project = var.project_name
  count = (var.environment == "staging" || var.environment == "qa" ? 0 : 1)
  location      = var.location
  repository_id = "mam-frontend"
  description   = "Repository to store mam-frontend images"
  format        = "DOCKER"
}