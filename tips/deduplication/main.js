const root = document.getElementById('root')
root.insertAdjacentHTML('beforebegin', '<h1>重複排除</h1>')
root.insertAdjacentHTML('beforebegin', '<h1>main.js console.logを確認</h1>')

const colors = ['red', 'red', 'green', 'blue', 'green']

// Set
{
  const uniqueColors = Array.from(new Set(colors))
  console.log(uniqueColors)
}

// Set + スプレット構文
{
  const uniqueColors = [...new Set(colors)]
  console.log(uniqueColors)
}

// filter(O(N^2))
{
  const uniqueColors = colors.filter(
    (color, index, self) => self.indexOf(color) === index
  )
  console.log(uniqueColors)
}

// reduse(O(N^2))
{
  const uniqueColors = colors.reduce(
    (colors, color) =>
      colors.indexOf(color) !== -1 ? colors : [...colors, color],
    []
  )
  console.log(uniqueColors)
}
