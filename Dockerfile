FROM node:20.17.0-alpine3.20 AS builder
FROM nginx:1.27.1-alpine3.20 AS server

FROM builder AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml ./

RUN corepack enable pnpm
RUN pnpm install

COPY . .

RUN pnpm build

FROM server AS runtime

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
