import { useHistory } from 'react-router-dom'
import { useStateContext } from '../context/StateProvider'

const Root = () => {
  const history = useHistory()
  const { isDark, setIsDark } = useStateContext()

  console.log('Root')
  return (
    <div className="flex justify-center items-center flex-col">
      <p className="font-bold my-1">Root</p>
      <p onClick={() => history.push('/component-a')}>Go ComponentA</p>
      on? off?:{isDark ? 'on' : 'off'}
      <button
        type="button"
        className="bg-gray-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
        onClick={() => setIsDark((isDark) => !isDark)}
      >
        toggle
      </button>
    </div>
  )
}

export default Root
