FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

FROM node:18-alpine AS runner
WORKDIR /app
COPY package*.json ./
RUN npm prune --production
COPY --from=builder /app/server.js ./server.js

EXPOSE 3000
ENV NODE_ENV=production

CMD ["node", "server.js"]