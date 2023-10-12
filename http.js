const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home');
  } else if (req.url === '/about') {
    res.end('Welcome to our history');
  } else {
    res.end(`
      <h1>Oops</h1>
      <p>We can't seem to find the page</p>
      <a href="/">Back home</a>
    `);
  }
});

server.listen(1000);