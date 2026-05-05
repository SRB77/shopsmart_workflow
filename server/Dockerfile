# Stage 1
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2
FROM node:18-alpine
WORKDIR /app

RUN addgroup app && adduser -S -G app app
USER app

COPY --from=builder /app .

EXPOSE 5001

HEALTHCHECK CMD wget --spider http://localhost:5001/health || exit 1

CMD ["node", "server.js"]