console.log('nullish-coalescing-operator')

let hoge = null

console.log(`hoge is ${hoge}`)

hoge = undefined ?? 'hoge'

console.log(`hoge is ${hoge}`)

hoge = null ?? 'fuga'

console.log(`hoge is ${hoge}`)
