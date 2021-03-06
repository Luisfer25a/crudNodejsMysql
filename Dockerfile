FROM node:10

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
CMD ["node", "src/app.js"]
