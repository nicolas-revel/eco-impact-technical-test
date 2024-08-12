# Eco Impact - Technical Test

This repo is the result of the technical test made for eco-impact. The aim of the test was to create an application for map generation, depending on various biomes.

## Installation

To run the project first install all dependancies using pnpm :

```bash
pnpm install
```

Then, since the project can be run on docker, use docker-compose to run the project :

```bash
docker compose up -d --build
```

Finnaly, use prisma to generate the different migrations to the database :

```bash
pnpm prisma migrate deploy && pnpm prisma generate
```

Your project should be running with api on `localhost:3000` and client on `localhost:5173`.
