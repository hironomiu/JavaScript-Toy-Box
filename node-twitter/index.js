import Twitter from 'twitter'
import Dotenv from 'dotenv'
import Readline from 'readline'

Dotenv.config()
const twitter = new Twitter({
  consumer_key: process.env.api_key,
  consumer_secret: process.env.api_key_secret,
  access_token_key: process.env.access_token,
  access_token_secret: process.env.access_token_secret,
})

const readline = Readline.createInterface({
  input: process.stdin,
})

readline.question('tweet?: ', (postContent) => {
  const params = { status: postContent }
  twitter.post('statuses/update', params, (error, tweet, response) => {
    if (error) {
      console.log(error)
    } else {
      console.log('success')
    }
  })
  readline.close()
})
