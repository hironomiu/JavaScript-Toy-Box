import { createStore, combineReducers } from 'redux'

export const COUNT_INCREMENT = 'count/increment'
export const COUNT_DECREMENT = 'count/decrement'
export const COUNT_INPUT_VALUE_INCREMENT = 'count/inputValueIncrement'
export const COUNT_INPUT_VALUE_DECREMENT = 'count/inputValueDecrement'
export const AMOUNT_SET = 'amount/set'

const count = (state = 0, action) => {
  switch (action.type) {
    case COUNT_INCREMENT:
      return state + 1
    case COUNT_DECREMENT:
      return state - 1
    case COUNT_INPUT_VALUE_INCREMENT:
      return (state += action.payload)
    case COUNT_INPUT_VALUE_DECREMENT:
      return (state -= action.payload)
    default:
      return state
  }
}

const amount = (state = 0, action) => {
  switch (action.type) {
    case AMOUNT_SET: {
      const amount = parseInt(action.payload) || 0
      return (state = amount)
    }
    default:
      return state
  }
}

export const store = createStore(combineReducers({ count, amount }))
