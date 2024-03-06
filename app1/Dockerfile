# Dockerfile for App 1
FROM node:latest
WORKDIR /home/node/app
COPY app1.js /home/node/app
RUN npm init -y && npm install express
CMD node app1.js
EXPOSE 8080