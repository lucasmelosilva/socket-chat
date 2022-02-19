let app = require('express')();
let http = require('http').createServer(app);
const port = 3000;
app.get('/', (req, res) => {
  res.sendFile(__dirname+'/pages/index.html');
});

http.listen(port, mensage);

function mensage(){
  console.log('server running in port 3000')
}
