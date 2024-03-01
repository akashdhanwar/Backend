// Creating a Node.js Server
const http = require('http');
const PORT_NUMBER = 3000;
// function rqListener(req, res) {
// }
const server = http.createServer((req,res)=>{
  console.log(req);
});
server.listen(PORT_NUMBER);
