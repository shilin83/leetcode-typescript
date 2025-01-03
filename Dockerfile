FROM oven/bun:1.1.42-alpine

WORKDIR /app

COPY . .

CMD ["bun", "test"]
