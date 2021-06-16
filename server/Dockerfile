FROM node:13.8

WORKDIR /app


COPY package.json package-lock.json ./
RUN npm i

CMD [ "npm", "run", "dev" ]

