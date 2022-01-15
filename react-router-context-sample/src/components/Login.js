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
