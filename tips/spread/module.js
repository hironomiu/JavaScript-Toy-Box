export const moduleA = (props) => {
  console.log(props)
}

export const moduleB = (props, ...rest) => {
  console.log(props, rest)
}
