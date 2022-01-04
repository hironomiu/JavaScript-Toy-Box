console.log('型変換(キャスト)')

// stringにキャスト　その１

console.log('----------')
console.log('' + {})
console.log(typeof '' + {})
if ('' + {}) {
  console.log(true)
} else {
  console.log(false)
}

if ('' + {} === '[object Object]') {
  console.log(true)
} else {
  console.log(false)
}

// stringにキャスト　その２

console.log('----------')
console.log('' + !{})
console.log(typeof '' + !{})
if ('' + !{}) {
  console.log(true)
} else {
  console.log(true)
}
// stringにキャスト　その３
console.log('----------')
console.log('' + ![])
console.log(typeof '' + ![])
if ('' + ![]) {
  // stringのfalseが格納されているためtrue
  console.log(true)
} else {
  console.log(false)
}
const hoge = '' + ![]
console.log(hoge)
console.log(typeof hoge)

// stringにキャスト　その４
console.log('----------')
console.log('' + !![])
console.log(typeof '' + !![])
if ('' + !![]) {
  // stringのtrueが格納されているためtrue
  console.log(true)
} else {
  console.log(false)
}
const fuga = '' + !![]
console.log(fuga)
console.log(typeof fuga)
