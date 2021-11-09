import { createStore, combineReducers } from 'redux'

const COUNT_INCREMENT = 'count/increment'
const COUNT_DECREMENT = 'count/decrement'

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

const store = createStore(combineReducers({ count }))
const $element = document.getElementById('app')

const render = () => {
  const { count } = store.getState()
  $element.innerHTML = `<p>${count}</p><button id="decrement_button">decrement</button><button id="increment_button">increment</button>`

  const $incrementButton = document.getElementById('increment_button')
  $incrementButton.addEventListener('click', () => {
    store.dispatch({ type: COUNT_INCREMENT })
  })

  const $decrementButton = document.getElementById('decrement_button')
  $decrementButton.addEventListener('click', () => {
    store.dispatch({ type: COUNT_DECREMENT })
  })
}

render()

store.subscribe(render)
