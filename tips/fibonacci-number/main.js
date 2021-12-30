const f = (n) => (n <= 1 ? n : f(n - 1) + f(n - 2))

console.log([...Array(15).keys()].map((a) => a + 1).map((a) => f(a)))
