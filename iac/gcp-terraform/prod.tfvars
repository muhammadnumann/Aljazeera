project_name     = "ajgc-dig-pdi-prd-mam-0"
container_image  = "europe-west1-docker.pkg.dev/ajgc-dig-pdi-prd-mam-0/mam-frontend/mam-frontend:prod"
location         = "europe-west1"
environment      = "prod"
infra_project_id = "ajgc-dig-net-prd-spoke-0"


vpc_connectors = {
  mam-vpc-connector-eu-west1 = {
    name           = "mam-vpc-conn-eu-west1"
    region         = "europe-west1"
    subnet_name    = "ajgc-dig-subn-prd-mam-eu-west1"
    machine_type   = "e2-standard-4"
    min_instances  = 2
    max_instances  = 10
    min_throughput = 200
    max_throughput = 1000
  }
}