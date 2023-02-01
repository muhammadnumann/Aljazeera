terraform {
  backend "gcs" {
    bucket = "vidicore-terraform-state"
    prefix = "vidicore-dev/front-end"
  }
}