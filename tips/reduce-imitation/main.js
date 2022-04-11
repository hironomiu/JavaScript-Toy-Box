console.log('reduce imitation')

const reduceImitation = (array, callback, defaultValue) => {
  let accu = defaultValue
  for (const [index, curr] of array.entries()) {
    accu = callback(accu, curr, index)
  }
  return accu
}

console.log(
  reduceImitation(
    ['a', 'b', 'c', 'd', 'e'],
    (accu, curr) => (accu = accu + curr),
    ''
  )
)

console.log(
  reduceImitation('abcde'.split(''), (accu, curr) => (accu = accu + curr), '')
)

console.log(
  reduceImitation(
    [1, 2, 3, 4, 5],
    (accu, curr, index) => {
      accu[index] = curr
      return accu
    },
    []
  )
)
