const http = require('http');
const hostname = '0.0.0.0'; // Virgolette corrette
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World DA GIT HUBBBBB versione 2');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
