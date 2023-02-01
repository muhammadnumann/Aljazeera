variable "project_name" {
  description = "Name of the GCP Project"
  type        = string
}
variable "location" {
  description = "Location Name"
  type        = string
}
variable "container_image" {
  description = "Name of Cloud Run Service to be created"
  type        = string
}

variable "environment" {
  type = string
}

variable "whitelisted_ips" {
  description = "Doha Office IPs and OpenVPN IPs"
  type = list(string)
  default = [ "194.6.255.0/24","78.100.98.96/27","78.100.29.104/29","34.238.5.53/32" ]
}

variable "vpc_connectors" {
  type = map(map(string))
}

variable "vpc_connector" {
  type = string
}


variable "infra_project_id" {
  description = "The ID of the project where the VPC will be created."
  type        = string

}