FROM oven/bun:1.2.1-alpine

WORKDIR /app

COPY . .

CMD ["bun", "test"]
