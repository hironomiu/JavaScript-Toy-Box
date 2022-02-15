// フィボナッチ：アロー関数
{
  const createFibonacciGenerator = () =>
    (function* () {
      let a = 0
      let b = 1
      while (true) {
        yield a
        ;[a, b] = [b, a + b]
      }
    })()

  const fibonacciGenerator = createFibonacciGenerator()
  console.log(fibonacciGenerator.next())
  console.log(fibonacciGenerator.next())
  console.log(fibonacciGenerator.next())
  console.log(fibonacciGenerator.next())
  console.log(fibonacciGenerator.next())
  console.log(fibonacciGenerator.next())
}

// フィボナッチ：関数宣言
{
  function* createFibonacciGenerator() {
    let a = 0
    let b = 1
    while (true) {
      yield a
      ;[a, b] = [b, a + b]
      if (b > 200) break
    }
  }

  const fibonacciGenerator = createFibonacciGenerator()

  console.log(fibonacciGenerator.next())
  console.log(fibonacciGenerator.next())
  console.log(fibonacciGenerator.next())
  console.log(fibonacciGenerator.next())
  console.log(fibonacciGenerator.next())
  console.log(fibonacciGenerator.next())
}

// 数値加算
function* createIncrementGenerator(num) {
  while (true) {
    num++
    yield num
  }
}

const incrementGenerator = createIncrementGenerator(10)
console.log(incrementGenerator.next())
console.log(incrementGenerator.next())
console.log(incrementGenerator.next())
console.log(incrementGenerator.next())
