# Lets get base image for our node app
FROM node:latest

# Lets define labels for this node app
LABEL "author"="spp"
LABEL "maintainer"="spp-dobee"
LABEL "desc"="This is sample and simple nodeJs-app to begin with DO and building workflows for CICD automation"
LABEL "serverName"="nodeJs-app1"

# Set working dir for node app
WORKDIR /usr/src/app

# Copy main package*.jason file to working dir
COPY package.json ./

# Install all dependencies and packages for node app
RUN npm install

# Copy rest of the code to working dir
COPY . .

# Application will be exposed on Port 3000
EXPOSE 3000

# Running node application
CMD [ "node", "index.js" ]
