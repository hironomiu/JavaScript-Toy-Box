import { memo } from 'react'
import { useStateContext } from '../context/StateProvider'

const Main = memo(() => {
  const { count, setCount } = useStateContext()
  const countUp = () => {
    setCount((prevCount) => (prevCount += 1))
  }
  const clearCount = () => {
    setCount(0)
  }
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }}
    >
      <div>
        <span>Main: {count}</span>
      </div>
      <div style={{ paddingTop: '50px' }}>
        <button onClick={() => countUp()}>count up</button>
        <button onClick={() => clearCount()}>count clear</button>
      </div>
    </main>
  )
})

export default Main
