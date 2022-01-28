const sumOfConsecutiveIntegers = (startNum, endNum) => {
  return ((startNum - 0.5 + endNum + 0.5) / 2) * (endNum - startNum + 1)
}

console.log(sumOfConsecutiveIntegers(1, 100))
console.log(sumOfConsecutiveIntegers(2, 100))
