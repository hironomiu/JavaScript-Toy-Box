import { store, COUNT_INCREMENT, COUNT_DECREMENT } from './modules/redux'

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
