# Running All Microservices in One Docker Container

This backend Dockerfile now runs all microservices (ai_service, analytics_service, billing_service, auth_service) together using the `start_microservices.sh` script. 

- To add/remove microservices, update `start_microservices.sh`.
- Individual Dockerfiles in each microservice have been removed for simplicity and maintainability.
