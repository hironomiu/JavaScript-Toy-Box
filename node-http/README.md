# node-http

node での http サーバ

## Run

```
npm run serve
```

## curl

```
curl -X POST -H "Content-Type: application/json" --data-urlencode 'name=太郎'  http://localhost:8282
```

```
curl -X POST -H "Content-Type: application/json" -d '{"name":"太郎", "age":"30"}' http://localhost:8282/json
```

## Install Memo

```
npm install --save-dev nodemon
```
