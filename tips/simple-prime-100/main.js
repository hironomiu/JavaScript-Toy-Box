console.log('素朴な素数100(simple-prime-100)')

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

const getPrimes = (primes) => {
  let i = 2
  let count = 0

  while (count < primes.length) {
    if (isPrime(i)) {
      primes[count] = i
      count += 1
    }
    i += 1
  }
}

const main = () => {
  // const primes = [...new Array(100).keys()].map((_) => 0)
  const primes = Array(100).fill(0)
  console.log('before:', primes)
  getPrimes(primes)
  console.log('after :', primes)
}

main()
