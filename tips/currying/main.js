console.log('カリー化')

{
  function add(num1) {
    return function func1(num2) {
      return num1 + num2
    }
  }
  console.log(add(1)(2))
}

{
  const add = (num1) => (num2) => num1 + num2
  console.log(add(3)(4))
}

{
  function func(fn) {
    return function func1(num1) {
      return function func2(num2) {
        return fn(num1, num2)
      }
    }
  }
  console.log(func((a, b) => a + b)(1)(2))
  console.log(func((a, b) => a * b)(1)(2))
}

{
  const add = (fn) => (num1) => (num2) => fn(num1, num2)
  console.log(add((a, b) => a + b)(3)(4))
  console.log(add((a, b) => a * b)(3)(4))
}
