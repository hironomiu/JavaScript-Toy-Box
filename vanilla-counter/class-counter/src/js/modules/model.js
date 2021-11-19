export class Model {
  constructor() {
    this.count = 0
    this.input = 0
  }

  updateInput(num) {
    this.input = num
  }

  increment() {
    this.count++
    this.incrementTrigger()
  }

  decrement() {
    this.count--
    this.decrementTrigger()
  }

  inputDecrement() {
    this.count -= this.input
    this.decrementTrigger()
  }

  inputIncrement() {
    this.count += this.input
    this.incrementTrigger()
  }

  incrementTrigger() {
    const event = new CustomEvent('count/increment', { detail: this.count })
    window.dispatchEvent(event)
  }
  decrementTrigger() {
    const event = new CustomEvent('count/decrement', { detail: this.count })
    window.dispatchEvent(event)
  }
}
