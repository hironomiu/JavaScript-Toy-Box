console.log('シャローコピー(shallow copy) ディープコピー(deep copy)')

const obj1 = {
  id: 1,
  items: [
    { itemId: 1, name: 'item1' },
    { itemId: 2, name: 'item2' },
  ],
}

console.log('シャローコピー(shallow copy) ')

const obj2 = { ...obj1 }
console.log({ obj1 }, { obj2 })
obj1.items[0].name = 'item1A'
console.log({ obj1 }, { obj2 })

console.log('ディープコピー(deep copy) ')
const obj3 = JSON.parse(JSON.stringify(obj1))
console.log({ obj1 }, { obj3 })
obj1.items[1].name = 'item2B'
console.log({ obj1 }, { obj3 })

console.log('ディープコピー(deep copy)')
const obj4 = structuredClone(obj1)
console.log({ obj1 }, { obj4 })
obj1.items[0].name = 'item1AA'
console.log({ obj1 }, { obj4 })

console.log('シャローコピー(shallow copy)  引数破壊、引数非破壊')
const tmpObj1 = { col: 'col' }
const obj5 = Object.assign(obj1, tmpObj1)
console.log({ obj1 }, { obj5 }, { tmpObj1 })
obj1.items[1].name = 'item2BB'
console.log({ obj1 }, { obj5 }, { tmpObj1 })

const tmpObj2 = { col2: 'col2' }

const obj6 = Object.assign({}, obj1, tmpObj2)
console.log({ obj1 }, { obj6 }, { tmpObj2 })
obj1.items[0].name = 'item1AAA'
console.log({ obj1 }, { obj6 }, { tmpObj2 })
