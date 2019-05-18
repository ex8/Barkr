FROM node:12-alpine

WORKDIR /main
COPY ./backend/frontend.js /main
COPY ./src /main/src
COPY ./public /main/public
# RUN ls ./build
COPY ./package.json /main
COPY ./package-lock.json /main

# RUN npm install

# RUN ls /main
# RUN npm run build
RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++
RUN npm install
RUN npm run build
RUN apk del build-dependencies

EXPOSE 3000

CMD ["node", "frontend.js"]