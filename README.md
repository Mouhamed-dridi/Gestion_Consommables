# Printer Toner Management Web App

This project is a web application designed to manage the toner of printers efficiently. The app provides an interface to track toner levels, predict when toner needs to be replaced, and manage inventory of toner cartridges.

## Features

- Track toner levels for multiple printers
- Predict toner replacement needs based on usage patterns
- Manage toner inventory
- User-friendly web interface

## Getting Started

### Prerequisites

- Docker
- Azure CLI (for pushing Docker images to Azure Container Registry)
- An Azure Container Registry account

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Mouhamed-dridi/Azure-Container-Registry-Demo.git 
   ```

   ```
   Azure-Container-Registry-Demo
   ```

2. Build the Docker image:
```
docker build -t my-web-project .
```
3. Tag the Docker image:
```
docker tag my-web-project:latest azurhub.azurecr.io/my-web-project:v1.1
```
4. Push the Docker image to Azure Container Registry:
```
az login
az acr login --name azurhub
docker push azurhub.azurecr.io/my-web-project:v1.1
```

**Note :** To use the Azure CLI on Ubuntu, you need to install it first. Here are the detailed steps to install Azure CLI on Ubuntu and verify its installation

Run the Docker container:
```
docker run -d -p 80:8080 azurhub.azurecr.io/my-web-project:v1.1
```

## Create an Azure Container Registry

Create a container registry:

Replace myContainerRegistry with your desired registry name. The registry name must be unique within Azure.

```
az acr create --resource-group myResourceGroup --name myContainerRegistry --sku Basic --location eastus
```


Log in to the Container Registry
```
az acr login --name myContainerRegistry
```
Push the Docker Image to the Registry
Tag the Docker image:
```
docker tag my-web-project:v1.1 myContainerRegistry.azurecr.io/my-web-project:v1.1
```
```
docker push myContainerRegistry.azurecr.io/my-web-project:v1.1
```

## Create an Azure Container Instance
Create a container instance:
```
Replace myContainerGroup with your desired container group name and myContainerRegistry with your registry name.
```







