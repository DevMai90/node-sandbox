const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter {}

// Initialize object - Make a new instance - Note the ()
const myEmitter = new MyEmitter();

// Event Listener - Now has access due to EventEmitter
// Callback fires off when the 'event' is emitted
myEmitter.on('event', () => console.log('Event fired!'));

// Init event - .emit is available due to EventEmitter
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');

class Logger extends EventEmitter {
  log(msg) {
    // Call event - Returns a callback with data
    this.emit('message', { id: uuid.v4(), msg });
  }
}

// module.exports = Logger;

const logger = new Logger();

logger.on('message', data => console.log('Called Listener', data));

logger.log('Hello World');
logger.log('Hi');
logger.log('Hola');
