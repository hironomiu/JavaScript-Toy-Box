console.log('正規表現(regex)')

const decimal = '10.01012345%'

console.log('少数店以下出力', decimal)
console.log('少数点以下削除', decimal.replace(/\.(\d+)/, ''))
