console.log('Array.prototype.reduce()')

console.log('NG Arrayを返していない例')
console.log([1, 2, 3].reduce((a, c, i) => (a[i] = c), []))

console.log('OK Arrayを返す例')
console.log(
  [1, 2, 3].reduce((a, c, i) => {
    a[i] = c
    return a
  }, [])
)
