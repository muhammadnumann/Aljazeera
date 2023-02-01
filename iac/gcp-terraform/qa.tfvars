project_name    = "ajgc-dig-pdi-dev-mam-0"
# container_image = "gcr.io/cloudrun/hello"
container_image = "europe-west1-docker.pkg.dev/ajgc-dig-pdi-dev-mam-0/mam-frontend/mam-frontend:qa"
location        = "europe-west1"
vpc_connector   = "mam-vpc-connector"
environment     = "qa"
infra_project_id = "ajgc-dig-net-dev-spoke-0"

vpc_connectors = {  
}