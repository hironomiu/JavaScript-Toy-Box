import { moduleA, moduleB } from './module.js'

console.log('--------------------------')

const obj = { name: '一郎', age: 30 }

moduleA({ ...obj })

console.log('--------------------------')

const array = [1, 2, 3]
moduleB(...array)

console.log('--------------------------')

console.log('before:', { abcd: { name: '太郎', age: 35 } })
const obj2 = { abcd: { name: '太郎', age: 35 } }
const entries = Object.entries(obj2)
const data = entries.map((entry) => {
  const [key, obj] = entry
  return { key, ...obj }
})

console.log('after:', data)
