const events = require('events')

var eventEmitter = new events.EventEmitter(); 

eventEmitter.on('knock', function() {
  console.log('Who\'s there?')
})

eventEmitter.on('knock', function() {
  console.log('Go away!')
})

eventEmitter.emit('knock')
eventEmitter.emit('knock')
eventEmitter.removeAllListeners();
eventEmitter.emit('knock')