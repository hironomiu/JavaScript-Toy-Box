import { StateProvider } from './context/StateProvider'
import { useRoutes } from 'react-router-dom'
import { routePath } from './routes'

const App = () => {
  const element = useRoutes(routePath)
  return <StateProvider>{element}</StateProvider>
}

export default App
