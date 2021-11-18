import { store, COUNT_INCREMENT, COUNT_DECREMENT } from './modules/redux'

const $element = document.getElementById('app')

const render = () => {
  const { count } = store.getState()
  $element.innerHTML = `
  <header>
    <div style="display:flex;justify-content: center;">
      <h1>Redux Counter App</h1>
    </div>
  </header>
  <div style="display:flex;justify-content: center;">
    <button id="decrement_button">decrement</button>
    <p style="font-size:x-large;margin:2px 4px;width:40px;text-align:center">${count}</p>
    <button id='increment_button'>increment</button>
  </div>
  `

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
