const { webkit } = require('playwright')

;(async () => {
  const browser = await webkit.launch()
  const page = await browser.newPage()
  try {
    await page.goto('https://www.google.com')

    await page.screenshot({ path: './images/image.png' })
  } catch (err) {
    console.log(err)
  } finally {
    await browser.close()
  }
})()
