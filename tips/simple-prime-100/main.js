console.log('素朴な素数100(simple-prime-100')

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

const getPrimes = (array) => {
  let i = 2
  let count = 0

  while (count < array.length) {
    if (isPrime(i)) {
      array[count] = i
      count += 1
    }
    i += 1
  }
}

const main = () => {
  const primes = [...new Array(100).keys()].map((_) => 0)
  getPrimes(primes)
  console.log(primes)
}

main()
