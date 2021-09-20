import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useStateContext } from '../context/StateProvider'

const Login = () => {
  const history = useHistory()
  const { isLogin, setIsLogin } = useStateContext()
  // const forcus = useRef(null)

  useEffect(() => {
    console.log('useEffect')
    if (isLogin) {
      console.log('history')
      history.push('/')
    }
  })

  return (
    <div>
      <div className="flex bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex-col font-mono ">
        <h1 className="bg-white pt-10 pb-8 font-bold rounded text-3xl">
          Super Web Site!!
        </h1>
        <h1 className="bg-white pt-6 pb-4 font-bold rounded text-xl">
          Sign In
        </h1>
        <div className="mb-4">
          <label
            className="block text-grey-darker pt-2 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="username"
            type="text"
            placeholder="Username"
            autoFocus={true}
          />
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm pt-2 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="text-red text-xs italic">Please choose a password.</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="bg-gray-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                setIsLogin(true)
                history.push('/')
              }}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
