FROM node:14.17-slim

WORKDIR /host/var
COPY ./ /host/var
RUN npm install

CMD node server.js