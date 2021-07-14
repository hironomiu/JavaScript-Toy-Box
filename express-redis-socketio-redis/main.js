// express
const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)

// socket-io
const { Server } = require("socket.io")
const io = new Server(server)

// redis + redis-adapter
const { createClient } = require("redis")
const redisAdapter = require("@socket.io/redis-adapter")

const HOST = "127.0.0.1"
const REDIS_PORT = 6379
const WEB_PORT = 5000

const pubClient = createClient({ host: HOST, port: REDIS_PORT })
const subClient = pubClient.duplicate()

io.adapter(redisAdapter(pubClient, subClient))

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    console.log("message: " + msg)
    io.emit("chat message", msg)
  })
})

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

server.listen(WEB_PORT, () => {
  console.log(`listening on *:${WEB_PORT}`)
})
