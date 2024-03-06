# Dockerfile for App 1
FROM node:latest
WORKDIR /home/node/app
COPY app1/* .  # Copy all files from the 'app1' folder to /home/node/app
RUN npm install
CMD node app1.js
EXPOSE 8080