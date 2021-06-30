# Pipedrive to Bling

## Requirements

1. Docker ou NodeJS
1. Pipedrive token
1. Bling key
1. Mongo connect string

## How to run

With Docker you need run this command:
```shell
$ docker-compose up -d
```

NodeJS you need run this commands:

```shell
$ npm install
$ npm run start:dev
```

## Transfering from Pipedrive to Bling

Make a `GET` request to `/transfer`

## Retrieving data from mongo

Make a `GET` request to `/mongo`

To filter make a `GET` request to `/mongo?date=YYYY-MM-DD`