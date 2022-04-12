FROM node:17-alpine
COPY ./app app
WORKDIR /app
RUN npm install
EXPOSE 3000
CMD npm start
