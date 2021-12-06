const root = document.getElementById('root')
root.insertAdjacentHTML('beforebegin', '<h1>Clousure</h1>')

const incrementFunc = (num) => {
  return () => ++num
}

const increment = incrementFunc(10)
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
