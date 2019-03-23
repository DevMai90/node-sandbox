const http = require('http');
const path = require('path');
const fs = require('fs');

// Create new server object in a variable
const server = http.createServer((req, res) => {
  // We want to load a file
  if (req.url === '/') {
    fs.readFile(
      // Create path to index.html from public folder
      path.join(__dirname, '/public', 'index.html'),
      'utf8',
      (err, data) => {
        if (err) {
          throw err;
        }
        // Add header - Write content type
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // Render our response which is the index.html file
        res.end(data);
      }
    );
  }
});

// Does not always run on 5000. Will run on whatever our host decides which is in an "environment variable"
// This check the environment variable then 5000
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
