const EventEmitter = require('events');

class Logger extends EventEmitter{
        log(message){
            console.log(`hello ${message}`);
            this.emit('logging',{data:'sanjith'});
        }
}
module.exports = Logger;