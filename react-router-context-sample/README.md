# react-router-context-sample

BrowserRouter,Context を使いグローバルでデータの保持、ログイン、画面遷移、ログアウトの簡単なサンプルアプリ(CSS は Tailwind を利用)

![demo](./demo.gif)

## SetUp

### React tailwind craco

`create-react-app`と必要なパッケージのインストール

```
npx create-react-app .
yarn add react-router-dom
yarn add -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
yarn add @craco/craco
```

`package.json`の script を`craco`で構成する

before

```
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
```

after(`eject`は削除)

```
    "start": "craco start",
    "build": "craco build",
    "test": "craco test"
```

`craco.config.js`を作成（`touch`ではなく VSCode からファイル作成でも良い）

```
touch craco.config.js
```

作成した`craco.config.js`に以下を記述

```
module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
}
```

### tailwind init

tailwind の初期化

```
npx tailwindcss init -p
```

`tailwind.config.js`の`purge`を修正

```

- purge: [],

+ purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

```

`./src/index.css`を tailwind を利用する設定に修正（以下の 3 行に全てを書き換え）

```

@tailwind base;
@tailwind components;
@tailwind utilities;

```

### Modal

モーダル用のパッケージのインストール

`@headlessui/react`

```
yarn add @headlessui/react
```

### icon

アイコン用のパッケージのインストール

`@heroicons/react`

```
yarn add @heroicons/react
```

## 起動

テンプレートが動作することを確認

```
yarn start
```

## Step1

`src/App.js`を一旦`hello`だけ表示させる

```
import React from 'react'

const App = () => {
  return <div>hello</div>
}

export default App
```

### context の作成

`src`配下に`context`ディレクトリを作成する

`src/context`配下に`StateProvider.js`を作成し`serviceName`を定義した以下を記述する

```
import { createContext, useContext } from 'react'

const StateContext = createContext({})

export const StateProvider = ({ children }) => {
  const serviceName = 'Super Web Site'

  return (
    <StateContext.Provider value={{ serviceName }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
```

### Layout.js の作成

`src`配下に`components`ディレクトリを作成する

`src/components`配下に`Layout.js`を作成し`context`で定義した`serviceName`を表示する以下を記述する

```
import React from 'react'
import { useStateContext } from '../context/StateProvider'

const Layout = ({ children }) => {
  const { serviceName } = useStateContext()

  return <div>{serviceName}</div>
}

export default Layout
```

### App.js の修正

`App.js`に`context`,`Layout`を組み込み画面に`Super Web Site`を表示する

```
import React from 'react'
import { StateProvider } from './context/StateProvider'
import Layout from './components/Layout'

const App = () => {
  return (
    <div>
      <StateProvider>
        <Layout />
      </StateProvider>
    </div>
  )
}

export default App
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

```

```
