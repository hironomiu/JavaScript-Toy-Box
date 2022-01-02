const baseString = 'hello 2022'

const checkString = (base, test) => {
  if (~base.indexOf(test)) {
    console.log('存在する')
  } else {
    console.log('存在しない')
  }
}

checkString(baseString, '2022')
checkString(baseString, '2021')
checkString(baseString, '2023')
checkString(baseString, 'hello')
