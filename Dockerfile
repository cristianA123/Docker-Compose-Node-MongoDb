FROM node:18

WORKDIR /app

COPY package.json /app

RUN npm install
RUN npm install -g nodemon

COPY . ./

EXPOSE 4000

CMD [ "npm", "run", "dev" ]



