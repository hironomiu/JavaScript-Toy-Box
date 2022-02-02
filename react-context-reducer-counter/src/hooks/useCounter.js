import { useCallback } from 'react'
import { useContext } from 'react'
import { StateContext } from '../context/StateProvider'

export const useCounter = () => {
  const { count, setCount } = useContext(StateContext)

  const handleClickDecrement = useCallback(() => {
    setCount({ type: 'DECREMENT', payload: null })
  }, [setCount])

  const handleClickIncrement = useCallback(() => {
    setCount({ type: 'INCREMENT', payload: null })
  }, [setCount])

  const handleChangeAmount = useCallback(
    (e) => {
      setCount({ type: 'SET_AMOUNT', payload: e.target.value })
    },
    [setCount]
  )

  const handleClickIncrementAmount = useCallback(() => {
    setCount({ type: 'INCREMENT_AMOUNT', payload: null })
  }, [setCount])

  return {
    count,
    handleClickDecrement,
    handleClickIncrement,
    handleChangeAmount,
    handleClickIncrementAmount,
  }
}
