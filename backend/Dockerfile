FROM node:20
WORKDIR /app/
COPY package.json /app
RUN npm install
COPY . .
EXPOSE 9005
CMD ["npm","start"]
