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
const $incrementButton = document.getElementById('increment_button')
const $decrementButton = document.getElementById('decrement_button')
const render = () => {
  const { count } = store.getState()
  $element.innerHTML = `<p>${count}</p>`
}

$incrementButton.addEventListener('click', () => {
  store.dispatch({ type: COUNT_INCREMENT })
})
$decrementButton.addEventListener('click', () => {
  store.dispatch({ type: COUNT_DECREMENT })
})
render()

store.subscribe(render)
