class Model {
  constructor() {
    this.count = 0
  }

  increment() {
    this.count++
    this.incrementTrigger()
  }

  decrement() {
    this.count--
    this.decrementTrigger()
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

class ViewCOntroller {
  constructor() {
    this.model = new Model()
    this.$element = document.getElementById('app')
    this.$increment = document.getElementById('increment')
    this.$decrement = document.getElementById('decrement')
  }

  mount() {
    this.render()
    this.$increment.addEventListener('click', (e) => {
      this.incrementOnClick(e)
    })
    window.addEventListener('count/increment', (e) => this.onMessage(e))

    this.$decrement.addEventListener('click', (e) => {
      this.decrementOnClick(e)
    })
    window.addEventListener('count/decrement', (e) => this.onMessage(e))
  }

  render() {
    this.$element.innerHTML = `<p>${this.model.count}</p>`
  }

  incrementOnClick(event) {
    this.model.increment()
  }

  decrementOnClick(event) {
    this.model.decrement()
  }

  onMessage(event) {
    this.render()
  }
}

const view = new ViewCOntroller()
view.mount()
