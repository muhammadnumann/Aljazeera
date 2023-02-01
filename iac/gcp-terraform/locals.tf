locals {
  cloud_run_service_name    = "mam-frontend-${var.environment}"
  external_ip_address       = "mam-frontend-${var.environment}-external-ip-address"
  cloud_armor_policy        = "mam-frontend-${var.environment}-policy"
  server_url                = "REACT_APP_SERVER_URL_PARAM_${upper(var.environment)}"
  vidispine_url             = "REACT_APP_VIDISPINE_URL_${upper(var.environment)}"
  neg_name                  = "mam-frontend-${var.environment}-neg"
  backend_service           = "mam-frontend-${var.environment}-backend"
  functions_neg_name        = "mam-frontend-functions-${var.environment}-neg"
  functions_backend_service = "mam-frontend-functions-${var.environment}-backend"
  url_map                   = "mam-frontend-${var.environment}-urlmap"
  https_proxy               = "mam-frontend-${var.environment}-https-proxy"
  lb_name                   = "mam-frontend-${var.environment}-lb"
  https_redirect_urlmap     = "mam-frontend-${var.environment}-https-redirect"
  http_proxy                = "mam-frontend-${var.environment}-http-proxy"
  https_redirect_lb         = "mam-frontend-${var.environment}-lb-http"
  cert                      = "mam-frontend-${var.environment}-certificate"

  enabled_apis = [
    "cloudresourcemanager.googleapis.com",
    "stackdriver.googleapis.com",
    "artifactregistry.googleapis.com",
    "servicenetworking.googleapis.com",
    "compute.googleapis.com",
    "secretmanager.googleapis.com",
    "vpcaccess.googleapis.com",
    "run.googleapis.com",
  ]
}

