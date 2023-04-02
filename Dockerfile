#** Arguments **
ARG NODE_VERSION="16-bullseye"

#** Stages **
#** Development **
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${NODE_VERSION} AS development
RUN npm install -g pnpm
WORKDIR /app

#** Builder **
FROM development AS builder
WORKDIR /app
COPY . /app
RUN pnpm install
RUN pnpm build

#** Production **
FROM node:${NODE_VERSION} AS production
WORKDIR /app
CMD "node" ".output/server/index.mjs"