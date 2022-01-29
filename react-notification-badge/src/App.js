import { memo } from 'react'
import Layout from './components/Layout'
import { StateProvider } from './context/StateProvider'

const App = memo(() => {
  return (
    <div>
      <StateProvider>
        <Layout />
      </StateProvider>
    </div>
  )
})

export default App
