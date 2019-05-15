FROM node:12-alpine

WORKDIR /main
COPY ./backend/gateway.js /main
COPY ./package.json /main
COPY ./package-lock.json /main

RUN npm install

EXPOSE 4000

CMD ["node", "gateway.js"]