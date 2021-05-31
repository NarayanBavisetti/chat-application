const express = require('express')
const socketio = require('socket.io')


const app = express()
const PORT = 5000
app.listen(PORT, ()=>console.log(`Listening to port ${PORT}`))


app.use()