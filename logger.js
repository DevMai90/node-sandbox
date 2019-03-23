const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
  log(msg) {
    // Call event - Returns a callback with data
    this.emit('message', { id: uuid.v4(), msg });
  }
}

module.exports = Logger;
