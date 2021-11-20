import '../scss/style.scss'
import { Model } from './modules/model'

class ViewCOntroller {
  constructor() {
    this.model = new Model()
    this.$element = document.getElementById('app')
  }

  mount() {
    this.render()
    window.addEventListener('count/increment', (e) => this.onMessage(e))
    window.addEventListener('count/decrement', (e) => this.onMessage(e))
  }

  updateInput(e) {
    if (e.target.value === '') return
    this.inputValue = e.target.value
  }

  render() {
    this.$element.innerHTML = `
      <div class="div1">
        <h1>Vanilla Class Counter App</h1>
      </div>
      </header>
      <div class="div1">
        <button id="decrement_button">decrement</button>
        <p >${this.model.count}</p>
        <button id='increment_button'>increment</button>
      </div>
      <div class="div1 div2">
        <button id='input_decrement_button'>decrement</button>
        <input type="text" id='input' />
        <button id='input_increment_button'>increment</button
      </div>
    `
    this.$decrement = document.getElementById('decrement_button')
    this.$increment = document.getElementById('increment_button')
    this.$inputDecrement = document.getElementById('input_decrement_button')
    this.$inputIncrement = document.getElementById('input_increment_button')
    this.$input = document.getElementById('input')
    this.$input.value = this.model.input
    this.$input.addEventListener('input', (e) => {
      this.model.updateInput(parseInt(e.target.value) || 0)
    })

    this.$increment.addEventListener('click', () => {
      this.incrementOnClick()
    })

    this.$decrement.addEventListener('click', () => {
      this.decrementOnClick()
    })

    this.$inputDecrement.addEventListener('click', () => {
      this.inputDecrementOnClick()
    })

    this.$inputIncrement.addEventListener('click', () => {
      this.inputIncrementOnClick()
    })
  }

  incrementOnClick() {
    this.model.increment()
  }

  decrementOnClick() {
    this.model.decrement()
  }

  inputDecrementOnClick() {
    this.model.inputDecrement()
  }

  inputIncrementOnClick() {
    this.model.inputIncrement()
  }

  onMessage() {
    this.render()
  }
}

const view = new ViewCOntroller()
view.mount()
