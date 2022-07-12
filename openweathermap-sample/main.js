const buttonClick = async (text) => {
  const apiKey = 'API key'
  const div = document.getElementById('answer')
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apiKey}&lang=ja&units=metric`
    )
    const json = await response.json()
    console.log(json)
    div.innerText = `${json.name}の平均気温は${json.main.temp}です`
  } catch (e) {
    div.innerText = '正しい地名を入力してください'
  }
}
window.onload = () => {
  console.log('openweathermap Get API key https://openweathermap.org/')
  const input = document.getElementById('input')
  const button = document.getElementById('button')
  button.onclick = () => buttonClick(input.value)
}
