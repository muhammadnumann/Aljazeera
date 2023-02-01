project_name    = "ajgc-dig-pdi-dev-mam-0"
# container_image = "gcr.io/cloudrun/hello"
container_image = "europe-west1-docker.pkg.dev/ajgc-dig-pdi-dev-mam-0/mam-frontend/mam-frontend:dev"
location        = "europe-west1"
vpc_connector   = "mam-vpc-connector"
environment     = "dev"
infra_project_id = "ajgc-dig-net-dev-spoke-0"



vpc_connectors = {
  mam-vpc-connector-eu-west1 = {
    name           = "mam-vpc-conn-eu-west1"
    region         = "europe-west1"
    subnet_name    = "ajgc-dig-subn-dev-mam-eu-west1"
    machine_type   = "e2-micro"
    min_instances  = 2
    max_instances  = 10
    min_throughput = 200
    max_throughput = 1000
  }
}
