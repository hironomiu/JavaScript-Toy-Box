console.log('Reduce Array Check')

const reduceArrayCheck = (array) => {
  const checkValue = array[0]
  const result = array.reduce((a, c) => (a = c === checkValue && a), true)
  return result
}

console.log(reduceArrayCheck([1, 2, 3, 4]))
console.log(reduceArrayCheck([1, 1, 1, 1]))
console.log(reduceArrayCheck(['a', 'b', 'c', 'd']))
console.log(reduceArrayCheck(['a', 'a', 'a', 'a']))

console.log('余談(Set)')

console.log(new Set([1, 2, 3, 4]).size)
console.log(new Set([1, 1, 1, 1]).size)
console.log(new Set(['a', 'b', 'c', 'd']).size)
console.log(new Set(['a', 'a', 'a', 'a']).size)
