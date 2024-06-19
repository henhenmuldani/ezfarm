FROM oven/bun:latest

WORKDIR /usr/src/app

COPY . .

RUN bun install

EXPOSE 3000

CMD ["bun", "start"]