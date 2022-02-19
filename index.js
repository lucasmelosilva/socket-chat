let app = require('express')();
let http = require('http').createServer(app);
const port = 3000;
app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

http.listen(port, mensage);

function mensage(){
  console.log('server running in port 3000')
}
