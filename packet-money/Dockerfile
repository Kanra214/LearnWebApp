FROM node:10.16.0

ARG STAGE

ENV NODE_ENV

WORKDIR /app

COPY package*.json ./

RUN if ["$STAGE" = "production"]; \
    then npm install --production && export NODE_ENV="$STAGE"; \
    else npm install
    fi


COPY . .

CMD ['ng',  'build']
