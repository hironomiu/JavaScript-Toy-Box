# firebase-react-sample

## すること

1. React アプリから Firebase Realtime Database を利用

## 前提

- [Firebase:](https://firebase.google.com/)を利用するため Gooble アカウントを所有していること

- React アプリが構築できること(参考 node.js,npm,yarn のバージョン)
  ```
  $ node -v
  v14.15.1
  $ npm -v
  6.14.11
  $ yarn -v
  1.22.5
  $ npx -v
  6.14.11
  ```

## 公式ドキュメント

今回利用する Firebase の API キーについては公式のドキュメントを一読推奨

[Learn about using and managing API keys for Firebase](https://firebase.google.com/docs/projects/api-keys)

## 1. Firebase Realtime Database

### 準備(Firebase Realtime Database)

[Firebase](https://firebase.google.com/)を開き「コンソールへ移動」を押下

![firebase-01](./images/firebase-01.png)

「プロジェクトを追加」を押下

![firebase-02](./images/firebase-02.png)

「プロジェクト名」を入力し「続行」を押下

![firebase-03](./images/firebase-03.png)

「アナリティクス」を無効(今回はサンプルコードのため)にし「プロジェクトを作成」を押下

![firebase-04](./images/firebase-04.png)

「続行」を押下

![firebase-05](./images/firebase-05.png)

「Realtime Database」を押下

![firebase-06](./images/firebase-06.png)

「データベースを作成」を押下

![firebase-07](./images/firebase-07.png)

「米国」を選択し「次へ」を押下

![firebase-08](./images/firebase-08.png)

「テストモードで開始」を選択し「有効にする」を押下

![firebase-09](./images/firebase-09.png)

作成されたことを確認

![firebase-10](./images/firebase-10.png)

### 準備(Firebase Web App)

「プロジェクトの概要」を押下し、「</>」(Web)を押下

![firebase-web-01](./images/firebase-web-01.png)

「アプリのニックネーム」を記載し「アプリを登録」を押下
(Firebase Hosting の設定はチェックしない)

![firebase-web-02](./images/firebase-web-02.png)

スクリプトをクリップボードにコピーし「コンソールに進む」を押下

![firebase-web-03](./images/firebase-web-03.png)

`.env.local`を作成しクリップボードにコピーした内容をペーストする(後ほど.gitignore に指定すること)

### 準備(React)

#### React ベースアプリの作成

`app`ディレクトリを作成し遷移後`create-react-app`で React ベースアプリを作成する

```
$ mkdir app
$ cd app
$ npx create-react-app .
```

#### React アプリの起動

`localhost:3000`で起動すること

```
$ yarn start
```

#### src 配下の変更

`src/components`ディレクトを作成する

#### App.js の修正

[`App.js`](./sample/src/components/App.js)を`src/components`に移動し変更する

#### index.js の修正

[`index.js`](./sample/src/index.js)を import している`App`を`components/App`にパスを修正しその他変更する

#### firebase モジュールのインストール

確認

```
$ npm info firebase
```

インストール

```
$ yarn add firebase
```

`yarn start`は Ctrl+C で停止し改めてスタートする

```
$ yarn start
```

#### `.evn.local`の移動

事前に作成した[`.evn.local`](./sample/.env.local)を`app`直下に配置する(sample は設定値は空のため適時埋めること)

```
$ vi ./.env.local .
```

#### `.env.local`の編集

`firebase.js`から`process.env`で取得するため以下の内容に修正する(シングルクォートの中は取得した値を記述する)

```
REACT_APP_FIREBASE_API_KEY=''
REACT_APP_FIREBASE_AUTH_DOMAIN=''
REACT_APP_FIREBASE_DATABASE_URL=''
REACT_APP_FIREBASE_PROJECT_ID=''
REACT_APP_FIREBASE_STORAGE_BUCKET=''
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=''
REACT_APP_FIREBASE_APP_ID=''
```

### 開発

#### firbase.js

[Firebase:read-and-write](https://firebase.google.com/docs/database/web/read-and-write)

`src`直下に[`firebase.js`](./sample/src/firebase.js)として作成

#### メッセージデータの投稿

`App.js`を以下に修正(空文字対応、エンター受付(全角、半角)、フォーカス固定などは行っていない)

```
import React, { useState } from "react"
import { pushMessage } from "../firebase"

const App = () => {
  const [name, setName] = useState("default")
  const [text, setText] = useState("text")
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName((name) => (name = e.target.value))}
      />
      <input
        type="text"
        value={text}
        onChange={(e) => setText((text) => (text = e.target.value))}
      />
      <button onClick={() => pushMessage({ name: name, text: text })}>
        {" "}
        push{" "}
      </button>
    </>
  )
}

export default App

```

#### メッセージデータの取得(からの表示)

`App.js`を以下に修正

[公式:listen_for_value_events](https://firebase.google.com/docs/database/web/read-and-write#listen_for_value_events)

```
import React, { useState, useEffect } from "react"
import { messagesRef, pushMessage } from "../firebase"

const App = () => {
  const [name, setName] = useState("default")
  const [text, setText] = useState("text")
  const [messages, setMessages] = useState([])

  useEffect(() => {
    messagesRef
      .orderByKey()
      .limitToLast(10)
      .on("value", (snapshot) => {
        const messages = snapshot.val()
        if (messages === null) return
        const entries = Object.entries(messages)
        const newMessages = entries.map((data) => {
          const [key, message] = data
          return { key, ...message }
        })
        setMessages(newMessages)
      })
  }, [])

  return (
    <>
      {messages.map((message) => (
        <div key={message.key}>
          {message.name}:{message.text}
        </div>
      ))}
      <input
        type="text"
        value={name}
        onChange={(e) => setName((name) => (name = e.target.value))}
      />
      <input
        type="text"
        value={text}
        onChange={(e) => setText((text) => (text = e.target.value))}
      />
      <button onClick={() => pushMessage({ name: name, text: text })}>
        {" "}
        push{" "}
      </button>
    </>
  )
}

export default App
```

### 確認

Chrome DevTools を開き API キーで検索してみましょう

![dev-tools-01](./images/dev-tools-01.png)
