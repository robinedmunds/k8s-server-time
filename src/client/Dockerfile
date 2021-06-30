# BUILD PHASE
FROM node:lts-alpine

WORKDIR /app
COPY package.json .
RUN npm install

COPY . .
RUN npm run build

# SERVE
FROM nginx:alpine

EXPOSE 3000

WORKDIR /usr/share/nginx/html
COPY --from=0 /app/dist .
