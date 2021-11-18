const viewController = () => {
  let count = 0

  const element = document.getElementById('app')
  let increment = document.getElementById('increment')
  let decrement = document.getElementById('decrement')

  const render = () => {
    const html = `
    <header>
      <div style="display:flex;justify-content: center;">
        <h1>Vanilla Function Counter App</h1>
      </div>
    </header>
    <div style="display:flex;justify-content: center;">
      <button id="decrement">decrement</button>
      <p style="font-size:x-large;margin:2px 4px;width:40px;text-align:center">${count}</p>
      <button id='increment'>increment</button>
    </div>
    `
    // element.innerHTML = event ? html : `<p>0</p>`
    element.innerHTML = html
    increment = document.getElementById('increment')
    decrement = document.getElementById('decrement')
    increment.addEventListener('click', () => {
      incrementOnClick()
    })

    decrement.addEventListener('click', () => {
      decrementOnClick()
    })
  }

  const incrementFunc = () => {
    count++
    incrementTrigger()
  }

  const decrementFunc = () => {
    count--
    decrementTrigger()
  }

  const incrementTrigger = () => {
    const event = new CustomEvent('count/increment', { detail: count })
    window.dispatchEvent(event)
  }

  const decrementTrigger = () => {
    const event = new CustomEvent('count/decrement', { detail: count })
    window.dispatchEvent(event)
  }

  const mount = () => {
    render()
    window.addEventListener('count/increment', () => {
      render()
    })

    window.addEventListener('count/decrement', () => {
      render()
    })
  }

  const incrementOnClick = (event) => {
    incrementFunc(event)
  }

  const decrementOnClick = () => {
    decrementFunc()
  }

  mount()
}

viewController()
