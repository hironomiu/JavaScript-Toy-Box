import { memo } from 'react'
import StateProvider from './context/StateProvider'
import Counter from './components/Counter'

const App = memo(() => {
  return (
    <>
      <StateProvider>
        <Counter />
      </StateProvider>
    </>
  )
})

export default App
