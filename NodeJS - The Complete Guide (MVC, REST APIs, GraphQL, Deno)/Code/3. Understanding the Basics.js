// # 1. Creating a Node.js Server
const http = require('http');
const PORT_NUMBER = 3000;
// function rqListener(req, res) {
// }
const server = http.createServer((req,res)=>{
// console.log(req);
// # 2. Reading request
  console.log(req.url, req.method, req.headers);
// # 4. Routing Request
  const url = req.url;
  if(url=== '/'){
     res.write('<html>')
     res.write('<head><title>Enter Message</title></head>');
     res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
     res.write('</html>);
     return res.end();
  }
// # 3. Sending back response 
// res.setHeader('Content-Type','text/html');
  res.write('<html>')
  res.write('<head><title>My First Page</title></heady>');
  res.write('<body><h1>Hello from my Node.js Server</h1></body>');
  res.write('</html>');
  res.end();
  // res.write() now will not throw error here but we should not write like this 
});
server.listen(PORT_NUMBER);
