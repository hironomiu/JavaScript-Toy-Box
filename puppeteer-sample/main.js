const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  try {
    await page.goto('https://www.google.com/')
    await page.type('input[name="q"', 'github hironomiu')
    await page.keyboard.press('Enter')
    await page.waitForSelector('h3 a', {
      waitUntil: 'networkidle1',
      timeout: 2500,
    })
    const aTagAll = await page.$$('a')
    let datas = []
    for (let i = 0; i < aTagAll.length; i++) {
      datas.push(await (await aTagAll[i].getProperty('href')).jsonValue())
    }

    datas = datas.filter((data) =>
      data.match(/https:\/\/github.com\/hironomiu/g)
    )

    await page.waitForSelector('h3 a', {
      waitUntil: 'networkidle2',
      timeout: 4500,
    })

    await page.goto(datas[0])

    await page.screenshot({ path: './images/image.png' })
  } catch (err) {
    console.log(err)
  }
  await browser.close()
})()
