import {
  store,
  COUNT_INCREMENT,
  COUNT_DECREMENT,
  COUNT_INPUT_VALUE_INCREMENT,
  AMOUNT_SET,
} from './modules/redux'

const $element = document.getElementById('app')
// eslint-disable-next-line no-unused-vars

let inputAmount = 0
const updateInput = (e) => {
  if (e.target.value === '') return
  inputAmount = e.target.value
}

const render = () => {
  const { count, amount } = store.getState()
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
  <div style="display:flex;justify-content: center;margin-top:10px;">
    <input style="text-align:center;" type="text" id='input' value=${amount} />
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

  const $input = document.getElementById('input')
  $input.focus()
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
