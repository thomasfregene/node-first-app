const http = require('http');

function requestListener(req, res){}

const server = http.createServer((req, res)=>{
    console.log(req);
    //process.exit();
});

server.listen(3000)