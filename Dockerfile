FROM node:16.14.0
WORKDIR /

COPY . /

RUN npm install

CMD ["npm", "start"]