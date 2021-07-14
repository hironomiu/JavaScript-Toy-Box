const startApplication = () => {
  window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition
  console.log("recognize called")
  let reco = new webkitSpeechRecognition()
  reco.lang = "ja-JP"
  reco.continuous = true

  let root = document.getElementById("root")

  reco.onerr = (event) => {
    console.log(event.error)
  }
  reco.onsoundend = () => {
    console.log("onsoundend")
  }
  reco.onresult = (e) => {
    let result = ""
    ;[...e.results].slice(e.resultIndex).forEach((results) => {
      result = results[0].transcript

      console.log(result)
      root.textContent = result
    })
  }
  reco.start()
}

startApplication()
