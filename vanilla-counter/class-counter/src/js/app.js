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
  }

  mount() {
    this.render()
    window.addEventListener('count/increment', (e) => this.onMessage(e))
    window.addEventListener('count/decrement', (e) => this.onMessage(e))
  }

  render() {
    this.$element.innerHTML = `
    <header>
      <div style="display:flex;justify-content: center;">
        <h1>Vanilla Class Counter App</h1>
      </div>
    </header>
    <div style="display:flex;justify-content: center;">
      <button id="decrement">decrement</button>
      <p style="font-size:x-large;margin:2px 4px;width:40px;text-align:center">${this.model.count}</p>
      <button id='increment'>increment</button>
    </div>
    `
    this.$decrement = document.getElementById('decrement')
    this.$increment = document.getElementById('increment')

    this.$increment.addEventListener('click', (e) => {
      this.incrementOnClick(e)
    })

    this.$decrement.addEventListener('click', (e) => {
      this.decrementOnClick(e)
    })
  }

  incrementOnClick() {
    this.model.increment()
  }

  decrementOnClick() {
    this.model.decrement()
  }

  onMessage() {
    this.render()
  }
}

const view = new ViewCOntroller()
view.mount()
