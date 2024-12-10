const http = require('node:http');

const hostname = 'localhost'; //localhost
const port = 3000; //Noi chay du an ( ne' cac port 21, 23,80, 443)

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World \n Hoi Dan IT Voi Eric');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
