const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const connect = require('./config/database-config');

const app = express();
const server = http.createServer(app);

const io = new Server(server);

io.on("connection", (socket) => {

  socket.on('join_room',(data)=>{
    console.log('joining a room', data);
    socket.join(data.roomid);
  })

  // socket.on("from client", () => {
  //   console.log("event coming from client");
  // });

  socket.on('msg_send',(data)=>{
    console.log(data);
    io.to(data.roomid).emit('msg_rcvd', data);
  })
});


app.set('view engine','ejs');
app.use("/", express.static(__dirname + "/public"));

app.get('/chat/:roomid',(req,res)=>{
  res.render('index',{
    name:'Pulkit',
    id: req.params.roomid
  });
})

server.listen(3000, async () => {
  console.log("Server Started");
  await connect();
  console.log("mongodb connected");
});
