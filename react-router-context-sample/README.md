# react-router-context-sample

BrowserRouter,Context を使いグローバルでデータの保持、ログイン、画面遷移、ログアウトの簡単なサンプルアプリ(CSS は Tailwind を利用)

![demo](./demo.gif)

[react-router v6 の実装コード](https://github.com/hironomiu/react-router-v6-context-sample)

## パッケージ管理ツール

yarn を利用

## SetUp

### React

任意のディレクトリから今回の作業用ディレクトリの作成(ディレクトリ名は何でも良い)

```
mkdir react-router-context-sample
cd react-router-context-sample
```

`create-react-app`と必要なパッケージのインストール(`yarn create react-app .`がエラーもしくは`yarn`が無い場合は`npx create-react-app .`で行い以降`yarn`の箇所を`npm`で読み替える)

```
yarn create react-app .
```

or

```
npx create-react-app .
```

ルーティング用に`react-router-dom`をインストール

```
yarn add react-router-dom
```

### tailwind install & init

[tailwind 公式 create-react-app](https://tailwindcss.com/docs/guides/create-react-app)

tailwind のインストール

```
yarn add -D tailwindcss postcss autoprefixer
```

tailwind の初期化

```
npx tailwindcss init -p
```

`tailwind.config.js`を修正

```
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

`./src/index.css`を tailwind を利用する設定に修正（以下の 3 行に全てを書き換え）

```

@tailwind base;
@tailwind components;
@tailwind utilities;

```

### Modal

モーダル用のパッケージのインストール

[`@headlessui/react`](https://www.npmjs.com/package/@headlessui/react)

```
yarn add @headlessui/react
```

### icon

アイコン用のパッケージのインストール

[`@heroicons/react`](https://www.npmjs.com/package/@heroicons/react)

```
yarn add @heroicons/react
```

## 起動

テンプレートが動作することを確認

```
yarn start
```

## Step1

ゴール：`Layout`,`Login`の画面を作成し表示させる

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

```
mkdir -p ./src/context
```

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

```
mkdir -p ./src/components
```

`src/components`配下に`Layout.js`を作成し`context`で定義した`serviceName`を表示する以下を記述する

```
import { useStateContext } from '../context/StateProvider'

const Layout = () => {
  const { serviceName } = useStateContext()

  return <div>{serviceName}</div>
}

export default Layout
```

### App.js の修正

`App.js`に`context`,`Layout`を組み込み画面に`Super Web Site`を表示する

```
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

### Login.js の作成

ログインフォームは tailwindcomponents の[Login form](https://tailwindcomponents.com/component/login-form)を参考に作成

`src/components`配下に`Login.js`を作成

```
import { useStateContext } from '../context/StateProvider'

const Login = () => {
  const { serviceName } = useStateContext()
  return (
    <div>
      <div className="">
        <h1 className="">{serviceName}!!</h1>
        <h1 className="">Login</h1>
        <div className="">
          <label htmlFor="username" className="">
            username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            autoFocus={true}
            className=""
          />
        </div>
        <div className="">
          <label htmlFor="password" className="">
            username
          </label>
          <input
            type="password"
            id="password"
            placeholder="******************"
            className=""
          />
          <p className="">Please choose a password.</p>
        </div>
        <div className="">
          <button type="button" className="">
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login

```

### App.js

`App.js`に`Login`を import し`Login`,`Layout`を表示させる

```
import { StateProvider } from './context/StateProvider'
import Layout from './components/Layout'
import Login from './components/Login'

const App = () => {
  return (
    <div>
      <StateProvider>
        <Login />
        <Layout />
      </StateProvider>
    </div>
  )
}

export default App
```

### Login.js

`Login.js`に CSS(`tailwind`)を当てていく

```
import { useStateContext } from '../context/StateProvider'

const Login = () => {
  const { serviceName } = useStateContext()
  return (
    <div>
      <div className="flex bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex-col font-mono">
        <h1 className="bg-white pt-10 pb-8 font-bold rounded text-3xl">
          {serviceName}!!
        </h1>
        <h1 className="bg-white pt-6 pb-4 font-bold rounded text-xl">Login</h1>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-grey-darker pt-2 text-sm font-bold mb-2"
          >
            username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            autoFocus={true}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-grey-darker text-sm pt-2 font-bold mb-2"
          >
            username
          </label>
          <input
            type="password"
            id="password"
            placeholder="******************"
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
          />
          <p className="text-red text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="bg-gray-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
          >Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login

```

## Step2

ゴール：ログインから Layout に遷移し、モーダルのログアウト画面からログアウト、キャンセルの実装をする

### context

`src/context/StateProvider.js`にログイン状態の State(`useState`の import,`isLogin,setIsLogin`の宣言,`StateContext.Provider`に設定) を設定する

```
import { createContext, useContext, useState } from 'react'

const StateContext = createContext({})

export const StateProvider = ({ children }) => {
  const serviceName = 'Super Web Site'
  const [isLogin, setIsLogin] = useState(false)

  return (
    <StateContext.Provider value={{ serviceName, isLogin, setIsLogin }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
```

### index.js

`BrowserRouter`で`<App/>`をラップし、`App.js`から`StateProvide`を移動する

```
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { StateProvider } from './context/StateProvider'

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
```

### App.js

`Routes,Route`を import しレイアウトを整える(一旦`Layout`を表示)

```
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './components/Login'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />} />
      </Routes>
    </div>
  )
}

export default App

```

### Login.js

`useStateContext`から context に格納してある`isLogin, setIsLogin`を取得
`useEffect`内で現在のログイン状況を確認し正しいパスを`useNavigate`で設定

```
import { useEffect } from 'react'
import { useStateContext } from '../context/StateProvider'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { serviceName, isLogin } = useStateContext()
  const navigate = useNavigate()
  useEffect(() => {
    if (isLogin) navigate('/')
  }, [isLogin, navigate])

  return (
    <div>
      <div className="flex bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex-col font-mono">
        <h1 className="bg-white pt-10 pb-8 font-bold rounded text-3xl">
          {serviceName}!!
        </h1>
        <h1 className="bg-white pt-6 pb-4 font-bold rounded text-xl">Login</h1>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-grey-darker pt-2 text-sm font-bold mb-2"
          >
            username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            autoFocus={true}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-grey-darker text-sm pt-2 font-bold mb-2"
          >
            username
          </label>
          <input
            type="password"
            id="password"
            placeholder="******************"
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
          />
          <p className="text-red text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="bg-gray-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
```

### Layout.js

ログイン判定を実装し`/login`が表示されること

```
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../context/StateProvider'

const Layout = () => {
  const { serviceName, isLogin } = useStateContext()
  const navigate = useNavigate()
  useEffect(() => {
    if (!isLogin) navigate('/login')
  }, [isLogin, navigate])

  return <div>{serviceName}</div>
}

export default Layout
```

### Login.js(ログイン処理の実装)

`button`タグに`onClick`イベント処理を追記し`Login`ボタン押下後`/`に遷移すること

```
import { useEffect } from 'react'
import { useStateContext } from '../context/StateProvider'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { serviceName, isLogin, setIsLogin } = useStateContext()
  const navigate = useNavigate()
  const login = () => {
    setIsLogin((prevLogin) => (prevLogin = true))
    navigate('/')
  }
  useEffect(() => {
    if (isLogin) navigate('/')
  }, [isLogin, navigate])

  return (
    <div>
      <div className="flex bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex-col font-mono">
        <h1 className="bg-white pt-10 pb-8 font-bold rounded text-3xl">
          {serviceName}!!
        </h1>
        <h1 className="bg-white pt-6 pb-4 font-bold rounded text-xl">Login</h1>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-grey-darker pt-2 text-sm font-bold mb-2"
          >
            username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            autoFocus={true}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-grey-darker text-sm pt-2 font-bold mb-2"
          >
            username
          </label>
          <input
            type="password"
            id="password"
            placeholder="******************"
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
          />
          <p className="text-red text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="bg-gray-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
            onClick={() => login()}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
```

### Root.js の仮実装

`./src/components`配下に`Root.js`を仮で実装する

```
const Root = () => {
  return <div>Root</div>
}

export default Root
```

### ComponentA.js の仮実装

`./src/components`配下に`ComponentA.js`を仮で実装する

```
const ComponentA = () => {
  return <div>ComponentA</div>
}

export default ComponentA
```

### App.js

`Layout`に children として`Root`,`ComponentA`を設定する

```
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './components/Login'
import Root from './components/Root'
import ComponentA from './components/ComponentA'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Root />} />
          <Route path="/component-a" element={<ComponentA />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
```

#### Layout.js を仮で実装(CSS 未適用)

```
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useStateContext } from '../context/StateProvider'
import { Link, Outlet } from 'react-router-dom'
import { LogoutIcon } from '@heroicons/react/outline'
const Layout = () => {
  const { serviceName, isLogin } = useStateContext()
  const navigate = useNavigate()
  useEffect(() => {
    if (!isLogin) navigate('/login')
  }, [isLogin, navigate])

  return (
    <div className="">
      <header className="">
        <nav className="">
          <div className="">
            <div className="">
              <span className="">{serviceName}!!</span>
              <Link className="" to="">
                Root
              </Link>
              <Link className="" to="">
                ComponentA
              </Link>
            </div>
            <div className="">
              <LogoutIcon className="" />
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="">
        <div className="">
          <p className="">{serviceName}@2021</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
```

### Layout.js(CSS の適用、ルーティングパスの設定)

```
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useStateContext } from '../context/StateProvider'
import { Link, Outlet } from 'react-router-dom'
import { LogoutIcon } from '@heroicons/react/outline'
const Layout = () => {
  const { serviceName, isLogin } = useStateContext()
  const navigate = useNavigate()
  useEffect(() => {
    if (!isLogin) navigate('/login')
  }, [isLogin, navigate])

  return (
    <div className="flex items-center flex-col min-h-screen text-gray-600 font-mono">
      <header className="flex items-center pl-8 h-14 bg-gray-600 w-screen">
        <nav className="bg-gray-600 w-screen">
          <div className="flex justify-between">
            <div className="">
              <span className="font-semibold text-xl tracking-tight text-white">
                {serviceName}!!
              </span>
              <Link
                className="text-sm text-gray-200 hover:bg-gray-700 px-3 py-2 rounded"
                to="/"
              >
                Root
              </Link>
              <Link
                className="text-sm text-gray-200 hover:bg-gray-700 px-3 py-2 rounded"
                to="/component-a"
              >
                ComponentA
              </Link>
            </div>
            <div className="">
              <LogoutIcon className="h-8 w-10 text-gray-200 hover:bg-gray-700 px-1 mr-5 rounded" />
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-gray-400 w-screen absolute bottom-0 h-14">
        <div className="flex justify-center items-center">
          <p className="pt-3">{serviceName}@2021</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout

```

### Modal.js(ログアウトモーダルの実装)

`./src/components/Modal.js`を作成

[tailwindui:Modals](https://tailwindui.com/components/application-ui/overlays/modals)を参考に実装

`onClose`句でフォーカス外のクリック時にログアウトをキャンセルした際に`modalOn`をコントロール

```
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { LogoutIcon } from '@heroicons/react/outline'
import { useStateContext } from '../context/StateProvider'

const Modal = ({ setModalOn }) => {
  const [open, setOpen] = useState(true)
  const { setIsLogin } = useStateContext()
  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto font-mono"
        initialFocus={cancelButtonRef}
        onClose={() => {
          setOpen(false)
          setModalOn(false)
        }}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10">
                    <LogoutIcon
                      className="h-6 w-6 text-gray-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Logout account
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        ログアウトしますか？
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-500 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => {
                    setOpen(false)
                    setModalOn(false)
                    setIsLogin(false)
                  }}
                >
                  Logout
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => {
                    setOpen(false)
                    setModalOn(false)
                  }}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal

```

### Layout.js(ログアウトモーダルの実装)

`Modal`コンポーネントを import し、モーダルの表示判定の`modalOn`ステートを作成、`LogoutIcon`をクリックした際にモーダルを表示するよう`onClick`イベントを記載

```
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useStateContext } from '../context/StateProvider'
import { Link, Outlet } from 'react-router-dom'
import { LogoutIcon } from '@heroicons/react/outline'
import Modal from './Modal'

const Layout = () => {
  const { serviceName, isLogin } = useStateContext()
  const navigate = useNavigate()
  const [modalOn, setModalOn] = useState(false)

  useEffect(() => {
    if (!isLogin) navigate('/login')
  }, [isLogin, navigate])

  return (
    <div className="flex items-center flex-col min-h-screen text-gray-600 font-mono">
      <header className="flex items-center pl-8 h-14 bg-gray-600 w-screen">
        <nav className="bg-gray-600 w-screen">
          <div className="flex justify-between">
            <div className="">
              <span className="font-semibold text-xl tracking-tight text-white">
                {serviceName}!!
              </span>
              <Link
                className="text-sm text-gray-200 hover:bg-gray-700 px-3 py-2 rounded"
                to="/"
              >
                Root
              </Link>
              <Link
                className="text-sm text-gray-200 hover:bg-gray-700 px-3 py-2 rounded"
                to="/component-a"
              >
                ComponentA
              </Link>
            </div>
            <div className="">
              <LogoutIcon
                className="h-8 w-10 text-gray-200 hover:bg-gray-700 px-1 mr-5 rounded"
                aria-hidden="true"
                onClick={() => {
                  setModalOn(true)
                }}
              />
            </div>
            {modalOn ? <Modal setModalOn={setModalOn} /> : null}
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-gray-400 w-screen absolute bottom-0 h-14">
        <div className="flex justify-center items-center">
          <p className="pt-3">{serviceName}@2021</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
```

ゴール：Root,ComponentA の中を実装する

### StateProvider.js

`isOn,SetIsOn`の定義

```
import { createContext, useContext, useState } from 'react'

const StateContext = createContext({})

export const StateProvider = ({ children }) => {
  const serviceName = 'Super Web Site'
  const [isLogin, setIsLogin] = useState(false)
  const [isOn, setIsOn] = useState(false)

  return (
    <StateContext.Provider
      value={{ serviceName, isLogin, setIsLogin, isOn, setIsOn }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
```

### Root.js(CSS 未適用)

`ComponentA`へ遷移、toggle の実装

```
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../context/StateProvider'

const Root = () => {
  const navigate = useNavigate()
  const { isOn, setIsOn } = useStateContext()

  return (
    <div className="">
      <p className="">Root</p>
      <p onClick={() => navigate('/component-a')}>Go ComponentA</p>
      on? off?:{isOn ? 'on' : 'off'}
      <button
        type="button"
        className=""
        onClick={() => setIsOn((isOn) => !isOn)}
      >
        toggle
      </button>
    </div>
  )
}

export default Root

```

### Root.js(CSS 適用)

CSS を適用する

```
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../context/StateProvider'

const Root = () => {
  const navigate = useNavigate()
  const { isOn, setIsOn } = useStateContext()
  return (
    <div className="flex justify-center items-center flex-col">
      <p className="font-bold my-1">Root</p>
      <p onClick={() => navigate('/component-a')}>Go ComponentA</p>
      on? off?:{isOn ? 'on' : 'off'}
      <button
        type="button"
        className="bg-gray-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
        onClick={() => setIsOn((isOn) => !isOn)}
      >
        toggle
      </button>
    </div>
  )
}

export default Root
```

#### ComponentA.js(CSS 未適用)

`Root`へ遷移、toggle の実装

```
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../context/StateProvider'

const ComponentA = () => {
  const navigate = useNavigate()
  const { isOn, setIsOn } = useStateContext()

  return (
    <div className="">
      <p className="">ComponentA</p>
      <p onClick={() => navigate('/')}>Go Root</p>
      on? off?:{isOn ? 'on' : 'off'}
      <button
        type="button"
        className=""
        onClick={() => setIsOn((isOn) => !isOn)}
      >
        toggle
      </button>
    </div>
  )
}

export default ComponentA
```

#### ComponentA.js

CSS を適用する。

```
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../context/StateProvider'

const ComponentA = () => {
  const navigate = useNavigate()
  const { isOn, setIsOn } = useStateContext()

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="font-bold my-1">ComponentA</p>
      <p onClick={() => navigate('/')}>Go Root</p>
      on? off?:{isOn ? 'on' : 'off'}
      <button
        type="button"
        className="bg-gray-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
        onClick={() => setIsOn((isOn) => !isOn)}
      >
        toggle
      </button>
    </div>
  )
}

export default ComponentA
```

### Layout.js

location を取得し"/"以外は"/"に帰るリンクを作成する

```
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useStateContext } from '../context/StateProvider'
import { Link, Outlet } from 'react-router-dom'
import { LogoutIcon } from '@heroicons/react/outline'
import Modal from './Modal'

const Layout = () => {
  const { serviceName, isLogin } = useStateContext()
  const navigate = useNavigate()
  const [modalOn, setModalOn] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (!isLogin) navigate('/login')
  }, [isLogin, navigate])

  return (
    <div className="flex items-center flex-col min-h-screen text-gray-600 font-mono">
      <header className="flex items-center pl-8 h-14 bg-gray-600 w-screen">
        <nav className="bg-gray-600 w-screen">
          <div className="flex justify-between">
            <div className="">
              <span className="font-semibold text-xl tracking-tight text-white">
                {serviceName}!!
              </span>
              <Link
                className="text-sm text-gray-200 hover:bg-gray-700 px-3 py-2 rounded"
                to="/"
              >
                Root
              </Link>
              <Link
                className="text-sm text-gray-200 hover:bg-gray-700 px-3 py-2 rounded"
                to="/component-a"
              >
                ComponentA
              </Link>
            </div>
            <div className="">
              <LogoutIcon
                className="h-8 w-10 text-gray-200 hover:bg-gray-700 px-1 mr-5 rounded"
                aria-hidden="true"
                onClick={() => {
                  setModalOn(true)
                }}
              />
            </div>
            {modalOn ? <Modal setModalOn={setModalOn} /> : null}
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      {location.pathname === '/' ? null : <Link to="/">Top</Link>}
      <footer className="bg-gray-400 w-screen absolute bottom-0 h-14">
        <div className="flex justify-center items-center">
          <p className="pt-3">{serviceName}@2021</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout

```

#### routes への切り出し

`./src`配下に`routes`ディレクトリを作成する。

```
mkdir -p ./src/routes
```

`index.js`の作成

```
import ComponentA from '../components/ComponentA'
import Layout from '../components/Layout'
import Login from '../components/Login'
import Root from '../components/Root'

export const routePath = [
  { path: '/login', element: <Login /> },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Root />,
      },
      {
        path: '/component-a',
        element: <ComponentA />,
      },
    ],
  },
]
```

### App.js

```
import { StateProvider } from './context/StateProvider'
import { useRoutes } from 'react-router-dom'
import { routePath } from './routes'

const App = () => {
  const element = useRoutes(routePath)
  return <StateProvider>{element}</StateProvider>
}

export default App
```
