console.log('Caesar cipher(シーザー暗号)')

const caesarCipher = (str, interval) => {
  console.log('Input:', str, ' Interval:', interval)
  const codePointA = 'A'.codePointAt(0)
  const codePointZ = 'Z'.codePointAt(0)
  const m = str
    .split('')
    .map((char) => {
      const codePoint = char.codePointAt(0)
      if (codePoint >= codePointA && codePoint <= codePointZ) {
        return codePoint + interval > codePointZ
          ? codePointA + codePoint + interval - codePointZ - 1
          : codePoint + interval
      }
      return codePoint
    })
    .map((codePoint) => String.fromCharCode(codePoint))
    .join('')

  return m
}

console.log('Output:', caesarCipher('HELLO WORLD ZZ', 3))
console.log('Output:', caesarCipher(`ALOHA!! HOGE'S ZZ`, 5))
