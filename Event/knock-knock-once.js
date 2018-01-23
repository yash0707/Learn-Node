const events = require('events');

var emitter = new events.EventEmitter();

emitter.once('knock', function() {
  console.log('Who\'s there?')
});

emitter.emit('knock');
emitter.emit('knock');