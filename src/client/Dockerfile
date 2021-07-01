# BUILD PHASE
FROM node:lts-alpine

WORKDIR /app
COPY .yarn/ .yarn/
COPY .pnp.js .
COPY .yarnrc.yml .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN rm -rf dist
RUN yarn build

# SERVE
FROM nginx:alpine

WORKDIR /usr/share/nginx/html
COPY --from=0 /app/dist .
