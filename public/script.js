const socket = io();

let btn = document.getElementById('btn');
btn.onclick = function exec(){
    socket.emit('from client');
}

socket.on('hello',()=>{
    console.log('Collected a new event from server');
    const div = document.createElement('div');
    div.innerText = 'New event from the server';
    document.body.appendChild(div);
})