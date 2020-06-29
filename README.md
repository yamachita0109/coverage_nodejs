# coverage_nodejs

## Environment

```
$ docker-compose up -d --build
$ docker-compose run --rm coverage_nodejs npm install
```

## Exec Node.js

```
$ docker-compose run --rm coverage_nodejs {cmd}
```

## Install Command

```
# dev
$ docker-compose run --rm coverage_nodejs npm install -D standard
$ docker-compose run --rm coverage_nodejs npm install -D mocha
$ docker-compose run --rm coverage_nodejs npm install -D nyc

# release
$ docker-compose run --rm coverage_nodejs npm install aws-sdk
$ docker-compose run --rm coverage_nodejs npm install log4js
$ docker-compose run --rm coverage_nodejs npm install request
$ docker-compose run --rm coverage_nodejs npm install request-promise
```

## Exec Test

```
$ docker-compose run --rm coverage_nodejs npm test
```

## OutPut Coverage Report

```
$ docker-compose run --rm coverage_nodejs npm run test-coverage
$ open src/coverage/index.html 
```
