FROM --platform=linux/amd64 node:lts-alpine 

WORKDIR /opt/app
COPY package.json package-lock.json ./
RUN npm install

COPY . .

CMD ["npm", "start"]
