console.log(
  '%c [分割代入(Destructuring assignment)]',
  'color:red;font-size:1.5em'
)

const [a, b] = [10, 20]
console.log(a, b)

const [c, d, ...rest] = [1, 2, 3, 4, 5]
console.log(c, d, rest)

const [e, , f, g, ...rest2] = [6, 7, 8, 9, 10, 11]
console.log(e, f, g, ...rest2)

const { aa, bb, cc, ...rest3 } = { bb: 10, aa: 20, dd: 30, ee: 40, cc: 50 }
console.log(aa, bb, cc, rest3)

const func = ({ length = 10, size = { x: 10, y: 20 } } = {}) => {
  console.log(length, size)
}

func()
func({})
func({ size: { x: 100, y: 200 } })
func({ length: 30, size: { x: 40, y: 50 } })
