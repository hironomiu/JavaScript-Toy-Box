console.log('残余引数(Rest Parameters)')

{
  function restParameters(...args) {
    return args
  }

  console.log(restParameters(1, 2, 3, 4, 5))
}

{
  function fill(length, value) {
    return Array.from({ length }, () => value)
  }

  function call(fn, ...args) {
    return fn(...args)
  }

  console.log(call(fill, 10, 'a'))
}
