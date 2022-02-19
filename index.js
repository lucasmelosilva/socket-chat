const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/pages/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected')
  socket.on('disconnect', () => console.log('user disconnected'))
})

http.listen(port, () => console.log('server is running on port 3000'));
