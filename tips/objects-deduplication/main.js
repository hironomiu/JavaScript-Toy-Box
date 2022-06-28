console.log('オブジェクトの重複排除 objects deduplication')

const objectData = [
  {
    id: 1,
    categoryId: 1,
    categoryName: 'foo',
    imageName: 'foofoofoo',
  },
  {
    id: 2,
    categoryId: 1,
    categoryName: 'foo',
    imageName: 'foofoofoofoo',
  },
  {
    id: 3,
    categoryId: 1,
    categoryName: 'foo',
    imageName: 'foofoofoofoofoo',
  },
  {
    id: 4,
    categoryId: 2,
    categoryName: 'bar',
    imageName: 'barbarbar',
  },
  {
    id: 5,
    categoryId: 3,
    categoryName: 'baz',
    imageName: 'bazbazbaz',
  },
]

console.log('before:', objectData)
const uniqueData = Array.from(
  new Map(objectData.map((obj) => [obj.categoryId, obj])).values()
)
console.log('after :', uniqueData)
