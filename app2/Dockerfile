# Dockerfile for App 2
FROM node:latest
WORKDIR /home/node/app
COPY app2.js /home/node/app
RUN npm init -y && npm install express
CMD node app2.js
EXPOSE 8888