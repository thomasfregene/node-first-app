const http = require('http');


const server = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers);
    //process.exit();

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<header><title>My First page</title></header>');
    res.write('<body><h1>hello from Node.js Sever!</h1></body>');
    res.write('</html>');
    res.end
});

server.listen(3000);