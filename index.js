const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server);

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);


  setInterval(() => {
    socket.emit("hello");
  }, 2000);
  socket.on('from client',()=>{
    console.log('event coming from client');
  })
});

app.use('/', express.static(__dirname + "/public"));

server.listen(3000, ()=>{
    console.log('Server Started');
})