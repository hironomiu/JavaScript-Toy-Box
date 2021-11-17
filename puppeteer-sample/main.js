const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  try {
    await page.goto('https://www.google.com/')
    await page.type('input[name="q"', 'github hironomiu')
    await page.keyboard.press('Enter')
    await page.waitForSelector('h3 a', {
      waitUntil: 'networkidle2',
      timeout: 2500,
    })
    const aTagAll = await page.$$('a')
    let tagText = []
    let indicator = ''
    console.log(aTagAll.length)
    for (let i = 0; i < aTagAll.length; i++) {
      // console.log(aTagAll[i])
    }
    // aTagAll[]
    // await page.waitFor(1500)
    await page.screenshot({ path: './images/image.png' })
  } catch (err) {
    null
    // console.log(err)
  }
  await browser.close()
})()
