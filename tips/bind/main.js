document.addEventListener('DOMContentLoaded', () => {
  const messageDiv = document.querySelector('#message')
  const message = new Sample('taro', 'hello world', messageDiv)
  const button1 = document.querySelector('#btn1')
  const button2 = document.querySelector('#btn2')
  button1.addEventListener('click', message.sayDeclaration.bind(message))
  button2.addEventListener('click', message.sayExpression.bind(message))
})

class Sample {
  constructor(name, text, element) {
    this.name = name
    this.text = text
    this.element = element
    this.result = 'default message'
  }
  sayDeclaration() {
    setTimeout(
      function () {
        this.element.innerHTML = `関数宣言、bindが必要:${this.name}:${this.text}`
      }.bind(this),
      1000
    )
  }
  sayExpression() {
    setTimeout(() => {
      this.element.innerHTML = `アロー関数、bindが不要:${this.name}:${this.text}`
    }, 1000)
  }
}
