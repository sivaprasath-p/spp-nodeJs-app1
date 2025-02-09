## spp's nodeJs-app

This repository contains sample and simple nodeJs application source code and their workflow resources to run in an automation pipeline.

```
# spp-nodeJs-app1

A **Node.js** application designed for to test sample NodeJs app and to implement CICD Workflow. This repository contains the source code, deployment configurations, and CI/CD automation for seamless deployment on a Kubernetes cluster.

## 🚀 Features

- Built with **Node.js & Express.js**  
- Dockerized for easy containerization  
- CI/CD pipeline implemented with **GitHub Actions**  
- Kubernetes deployment using **manifests & Helm charts**  
- Google Container Registry (**GCR**) for managing container images  

## 📂 Project Structure

```
spp-nodeJs-app1/
│── index.js              # Initial application
│── test/                 # To test the application
│── k8s-manifests/        # Kubernetes deployment YAMLs
│── Dockerfile            # Docker configuration
│── .github/workflows/    # GitHub Actions CI/CD pipelines
│── package.json          # Node.js dependencies
│── README.md             # Project documentation
```

## 🛠️ Prerequisites

Before running the application, ensure you have:

- **Node.js** v16+ installed  
- **Docker** installed for containerization  
- **Kubectl** & **Minikube/GKE** for Kubernetes deployments  
- **Google Cloud SDK** (if deploying to GKE)  

## 🚀 Installation & Usage

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/sivaprasath-p/spp-nodeJs-app1.git
cd spp-nodeJs-app1
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Run the Application Locally**
```sh
npm start
```
Access the application at `http://localhost:3000`

## 🐳 Docker Instructions
### **Build Docker Image**
```sh
docker build -t spp-node-app .
```

### **Run Docker Container**
```sh
docker run -p 3000:3000 spp-node-app
```

## ☸️ Kubernetes Deployment

### **Apply Manifests**
```sh
kubectl apply -f k8s-manifests/
```

### **Check Application Status**
```sh
kubectl get pods
kubectl get svc
```

## 🔄 CI/CD Pipeline
This project uses **GitHub Actions** for automating:
- Code testing  
- Docker image building & pushing to **Google Container Registry (GCR)**  
- Kubernetes deployment using only **modified manifests**

## 🛠️ Configuration
- **main** workflow will help you to 
  |-- Use when you to build Docker image & pushing to **Google Container Registry (GCR)**
- **changes-to** workflow will apply the changes to cluster when there is changes in **`k8s-manifests/`** YAML files.
  |-- Use when you prefer to apply the changes to k8s-cluster when there is request to modify components (deployments, svc, secrets)

---

📧 **Contact:** [LinkedIn Profile](https://www.linkedin.com/in/sivaprasath-p)
