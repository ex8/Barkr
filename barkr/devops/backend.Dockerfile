FROM node:12-alpine

WORKDIR /main
COPY ./backend/app.js /main
COPY ./package.json /main
COPY ./package-lock.json /main

RUN npm install

EXPOSE 5000

CMD ["node", "app.js"]