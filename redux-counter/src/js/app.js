import {
  store,
  COUNT_INCREMENT,
  COUNT_DECREMENT,
  COUNT_INPUT_VALUE_INCREMENT,
  COUNT_INPUT_VALUE_DECREMENT,
  AMOUNT_SET,
} from './modules/redux'

import '../scss/style.scss'

const $element = document.getElementById('app')

let inputAmount = 0
const updateInput = (e) => {
  if (e.target.value === '') return
  inputAmount = e.target.value
}

const render = () => {
  const { count, amount } = store.getState()
  $element.innerHTML = `
  <header>
    <div class="div1">
      <h1>Redux Counter App</h1>
    </div>
  </header>
  <div class="div1">
    <button id="decrement_button">decrement</button>
    <p >${count}</p>
    <button id='increment_button'>increment</button>
  </div>
  <div class="div1 div2">
    <button id='input_decrement_button'>decrement</button>
    <input type="text" id='input' />
    <button id='input_increment_button'>increment</button
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

  const $inputDecrementButton = document.getElementById(
    'input_decrement_button'
  )
  $inputDecrementButton.addEventListener('click', () => {
    store.dispatch({ type: AMOUNT_SET, payload: inputAmount })
    store.dispatch({
      type: COUNT_INPUT_VALUE_DECREMENT,
      payload: parseInt(inputAmount) || 0,
    })
  })

  const $input = document.getElementById('input')
  // $input.focus()
  $input.value = amount
  $input.addEventListener('input', updateInput)

  const $inputIncrementButton = document.getElementById(
    'input_increment_button'
  )
  $inputIncrementButton.addEventListener('click', () => {
    store.dispatch({ type: AMOUNT_SET, payload: inputAmount })
    store.dispatch({
      type: COUNT_INPUT_VALUE_INCREMENT,
      payload: parseInt(inputAmount) || 0,
    })
  })
}

render()

store.subscribe(render)
