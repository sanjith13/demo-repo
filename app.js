//#path module
// const path = require('path');
// const pathquery = path.parse(filename);
// console.log(pathquery);

//#os module
// const os = require('os');
// var totalmem = os.totalmem();
// var freemem = os.freemem(); 
// console.log(`totalmemory :${totalmem/1e+9} GB freememory :${freemem/1e+9} GB`);


//#fsmodule
//const files = require('fs');
// const file = files.readdirSync('./');
// console.log(file);
// files.readdir('./m',function (err,files){
//     if(err){
//         console.log(`error ${err}`);
//     }
//     else{
//         console.log(files);
//     }
// })

//event emitter
// const EventEmitter = require('events');
// const Logger = require('./logger');
// const logger = new Logger();

// logger.on('logging', ( e ) => {
//     console.log(`message read by ${e.data}`);
// });
 
// logger.log('sanjith');

//#http module 
//const http = require('http');
// http.createServer((req,res)=> {
//     if(req.url == '/'){
//         res.write("hello sanjith");
//         res.end();
//     }
//     else if(req.url == '/api/lists'){
//         res.end(JSON.stringify([1,2,3]));
//     }
// }).listen(4000);
// console.log('listening to port 4000....');