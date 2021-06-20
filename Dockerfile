FROM node:14.17-slim

WORKDIR /host/var
COPY ./ /host/var
RUN npm install
EXPOSE 80
CMD node server.js
