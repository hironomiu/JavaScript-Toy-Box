const h =
  (...f) =>
  (input) =>
    f.reduce((a, c) => c(a), input)
const p = h(
  (x) => x + ' bob!! ' + x + ' taro!!',
  (x) => console.log(x)
)
p('Hey!')

const hh =
  (...f) =>
  (arg) =>
    f.reduce((a, c) => c(a), arg)
const pp = hh(
  (x) => x + x,
  (x) => () => x--
)
const b = pp(2)
console.log(b())
console.log(b())
