import { memo } from 'react'
import { useCounter } from '../hooks/useCounter'
const Counter = memo(() => {
  const {
    count,
    handleClickDecrement,
    handleClickIncrement,
    handleChangeAmount,
    handleClickIncrementAmount,
  } = useCounter()

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>React Context Reducer Counter</h1>
        <div style={{ fontSize: '25px' }}>
          <button style={{ fontSize: '30px' }} onClick={handleClickDecrement}>
            -
          </button>
          <span style={{ margin: '20px' }}>{count.value}</span>
          <button style={{ fontSize: '30px' }} onClick={handleClickIncrement}>
            +
          </button>
        </div>
        <div>
          <input
            type="text"
            style={{ fontSize: '30px', width: '50px', margin: '20px' }}
            onChange={(e) => handleChangeAmount(e)}
            value={count.amount}
          />
          <button
            onClick={handleClickIncrementAmount}
            style={{ fontSize: '30px' }}
          >
            ADD
          </button>
        </div>
      </div>
    </>
  )
})

export default Counter
