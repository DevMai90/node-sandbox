const http = require('http');

// Create server object
http
  .createServer((req, res) => {
    // When we get a request, we then want to write a response.
    // Write -> outputs to browser
    res.write('Hello World');
    res.end();
  })
  .listen(5000, () => console.log('Server running...'));
// In order for this to run, it needs to listen onto a port
// We chose port 5000 and added a callback just to see that the server is running
