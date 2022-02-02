import { createContext, useReducer } from 'react'

export const StateContext = createContext()

const initialCount = {
  value: 0,
  amount: 0,
}

const counter = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementCounter = state.value + 1
      return { ...state, value: incrementCounter }
    case 'DECREMENT':
      const decrementCounter = state.value - 1
      return { ...state, value: decrementCounter }
    case 'SET_AMOUNT':
      const amount = action.payload
      console.log(amount, state)
      return { ...state, amount: amount }
    case 'INCREMENT_AMOUNT':
      return { ...state, value: state.value + (parseInt(state.amount) || 0) }
    default:
      return state
  }
}

const StateProvider = ({ children }) => {
  const [count, setCount] = useReducer(counter, initialCount)

  return (
    <StateContext.Provider value={{ count, setCount }}>
      {children}
    </StateContext.Provider>
  )
}

export default StateProvider
