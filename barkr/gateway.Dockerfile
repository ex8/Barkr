FROM node:12-alpine

WORKDIR /main
COPY ./backend/gateway.js /main
COPY ./package.json /main
COPY ./package-lock.json /main

RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++
RUN npm install
RUN apk del build-dependencies

EXPOSE 4000

CMD ["node", "gateway.js"]