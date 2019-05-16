FROM node:12-alpine

WORKDIR /main
COPY ./backend/app.js /main
COPY ./backend/config /main/config
COPY ./backend/models/pet.js /main/models/pet.js
COPY ./backend/routes/endpoints.js /main/routes/endpoints.js
COPY ./backend/controllers/pet.js /main/controllers/pet.js
COPY ./package.json /main
COPY ./package-lock.json /main

RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++
RUN npm install
RUN apk del build-dependencies

EXPOSE 5000

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD ["node", "app.js"]