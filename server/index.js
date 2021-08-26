const express = require("express");
const socketio = require("socket.io");
const http = require('http');

const app = express();
const server = http.createServer(app)
const io = socketio(server)

io.on("/", (server)=>{
    console.log()
})

const PORT = 5000;
app.listen(PORT, () => console.log(`Listening to port ${PORT}`));


const router = require('./Router/router')
app.use(router);


