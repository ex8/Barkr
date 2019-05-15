FROM node:12-alpine

WORKDIR /main
COPY ./backend/frontend.js /main
COPY ./src /main/src
# RUN ls ./build
COPY ./package.json /main
COPY ./package-lock.json /main

RUN npm install

# RUN ls /main
RUN npm run build


EXPOSE 3000

CMD ["node", "frontend.js"]