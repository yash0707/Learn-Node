const events = require('events')

var eventEmitter = new events.EventEmitter();

eventEmitter.on('done', (timeDone)=>{
  console.log('Job was pronounced done at', timeDone)
})

eventEmitter.emit('done', new Date())
eventEmitter.removeAllListeners()  // remove  all observers