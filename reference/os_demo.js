// os is for operating system
const os = require('os');

// Platform - Returns operating system platform
console.log(os.platform());

// CPU Arch
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// Free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home directory
console.log(os.homedir());

// Uptime - In seconds
console.log(os.uptime() / 60 / 60);
