FROM node:10.16.0

ARG STAGE

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "start", "$STAGE" ]