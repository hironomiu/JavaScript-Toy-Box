# node-twitter

標準入力から Tweet をするサンプルアプリ

## setup

### package install

```
npm install twitter
npm install dotenv
```

### credentials

`node-twitter`直下に`.env`を作成しアクセストークン、シークレットキーを設定する

```
api_key =
api_key_secret =
access_token =
access_token_secret =
```

### package.json

ES で実行するため`"type": "module"`を追記(以下例)

```
{
  "dependencies": {
    "dotenv": "^10.0.0",
    "twitter": "^1.7.1"
  },
  "type": "module"
}
```

## run

```
node index.js
```
