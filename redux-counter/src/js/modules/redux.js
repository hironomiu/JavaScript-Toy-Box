import { createStore, combineReducers } from 'redux'

export const COUNT_INCREMENT = 'count/increment'
export const COUNT_DECREMENT = 'count/decrement'
export const COUNT_INPUT_VALUE_INCREMENT = 'count/inputVlueIncrement'
export const AMOUNT_SET = 'amount/set'

const count = (state = 0, action) => {
  switch (action.type) {
    case COUNT_INCREMENT:
      return state + 1
    case COUNT_DECREMENT:
      return state - 1
    case COUNT_INPUT_VALUE_INCREMENT:
      console.log('COUNT_INPUT_VALUE_INCREMENT')
      return (state += action.payload)
    default:
      return state
  }
}

const amount = (state = 0, action) => {
  switch (action.type) {
    case AMOUNT_SET:
      console.log('AMOUNT_SET:', action.payload)
      // eslint-disable-next-line no-case-declarations
      const amount = parseInt(action.payload) || 0
      return (state = amount)
    default:
      return state
  }
}

export const store = createStore(combineReducers({ count, amount }))
