FROM node:alpine

COPY package*.json /usr/src/app/

WORKDIR /usr/src/app

RUN npm install

COPY . .

CMD ["node", "index.js"]
