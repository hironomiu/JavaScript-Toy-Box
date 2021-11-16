import { createStore, combineReducers } from 'redux'

export const COUNT_INCREMENT = 'count/increment'
export const COUNT_DECREMENT = 'count/decrement'

const count = (state = 0, action) => {
  switch (action.type) {
    case COUNT_INCREMENT:
      return state + 1
    case COUNT_DECREMENT:
      return state - 1
    default:
      return state
  }
}

export const store = createStore(combineReducers({ count }))
