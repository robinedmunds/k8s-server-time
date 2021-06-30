# BUILD PHASE
FROM node:lts-alpine

WORKDIR /app
COPY . .

RUN yarn install
RUN yarn build

# SERVE
FROM nginx:alpine

WORKDIR /usr/share/nginx/html
COPY --from=0 /app/dist .
