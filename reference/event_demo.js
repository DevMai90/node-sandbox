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
