const http = require('http');
const path = require('path');
const fs = require('fs');

// Create new server object in a variable
const server = http.createServer((req, res) => {
  // // We want to load a file
  // if (req.url === '/') {
  //   fs.readFile(
  //     // Create path to index.html from public folder
  //     path.join(__dirname, '/public', 'index.html'),
  //     'utf8',
  //     (err, data) => {
  //       if (err) {
  //         throw err;
  //       }
  //       // Add header - Write content type
  //       res.writeHead(200, { 'Content-Type': 'text/html' });
  //       // Render our response which is the index.html file
  //       res.end(data);
  //     }
  //   );
  // }
  // // Load About page
  // if (req.url === '/about') {
  //   fs.readFile(
  //     // Create path to index.html from public folder
  //     path.join(__dirname, '/public', 'about.html'),
  //     'utf8',
  //     (err, data) => {
  //       if (err) {
  //         throw err;
  //       }
  //       // Add header - Write content type
  //       res.writeHead(200, { 'Content-Type': 'text/html' });
  //       // Render our response which is the index.html file
  //       res.end(data);
  //     }
  //   );
  // }
  // // REST API - Transfers JSON data
  // if (req.url === '/api/users') {
  //   // Hard coding data
  //   const users = [
  //     { name: 'Bob Smith', age: 40 },
  //     { name: 'David Mai', age: 600 }
  //   ];
  //   // Note that 'Content-Type' is different since we will render JSON data
  //   res.writeHead(200, { 'Content-Type': 'application/json' });
  //   // Convert our data to JSON and render it
  //   res.end(JSON.stringify(users));
  // }
  /*
This method is very inefficient. We'll have to do this for every single page. We will also ahve to handle CSS.
This is where Express comes in. Express is a backend framework.
*/

  // Build dynamic file path
  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  );

  // Extension of file
  let extname = path.extname(filePath);

  // Initial content type - Setting default
  let contentType = 'text/html';

  // Check extension and set Content-Type
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  // Read file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Check error code. ENOENT means the page wasn't found
      if (err.code == 'ENOENT') {
        // Page not found - Load error page
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, data) => {
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(data, 'utf8');
        });
      } else {
        // More than one type of error code. Will most likely be a server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data, 'utf8');
    }
  });
});

// Does not always run on 5000. Will run on whatever our host decides which is in an "environment variable"
// This check the environment variable then 5000
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
