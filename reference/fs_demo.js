// File System Module

const fs = require('fs');
const path = require('path');

// Create folder - Asynchronous - Make a folder called test inside our current directory
// Three parameters (path, options, callback)

// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//   if (err) throw err;
//   console.log('Folder created...');
// });

// Create and write to file
// Three parameters (path, content, callback)
// Note that writeFile will override anything that is existing. Will have to use fs.appendFile() to add onto existing file
// In this case, we're running them both at the same time
// fs.writeFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   'Hello World!',
//   err => {
//     if (err) throw err;
//     console.log('File written to...');

//     // File append
//     fs.appendFile(
//       path.join(__dirname, '/test', 'hello.txt'),
//       ' I love Node.js!',
//       err => {
//         if (err) throw err;
//         console.log('File written to...');
//       }
//     );
//   }
// );

// Read file
// Three parameters (path, character encoding (utf8), callback)
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//   if (err) throw err;
//   // Data is whatever is in the txt file!!
//   console.log(data);
// });

// Rename file
// Three parameteres (path, new path name, callback)
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'helloWorld.txt'),
  err => {
    if (err) throw err;
    console.log('File renamed...');
  }
);
