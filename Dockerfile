FROM: node:22.17-alpine

WORKDIR: /app

COPY package*.json
RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]