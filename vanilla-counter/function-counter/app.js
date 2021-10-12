const viewController = () => {
  let count = 0

  const element = document.getElementById('app')
  const increment = document.getElementById('increment')
  const decrement = document.getElementById('decrement')
  const hoge = document.getElementById('hoge')

  const render = (event) => {
    element.innerHTML = event ? `<p>${event.detail}</p>` : `<p>0</p>`
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
    render(null)

    increment.addEventListener('click', () => {
      incrementOnClick()
    })

    decrement.addEventListener('click', () => {
      decrementOnClick()
    })

    window.addEventListener('count/increment', (e) => {
      render(e)
    })

    window.addEventListener('count/decrement', (e) => {
      render(e)
    })
  }

  const incrementOnClick = (event) => {
    incrementFunc(event)
  }

  const decrementOnClick = (event) => {
    decrementFunc()
  }

  mount()
}

viewController()
