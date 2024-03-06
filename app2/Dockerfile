# Dockerfile for App 2
FROM node:latest
WORKDIR /home/node/app
COPY app2/* .  # Copy all files from the 'app' folder to /home/node/app
RUN npm install
CMD node app2.js
EXPOSE 8081

