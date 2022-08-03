const fs = require('fs');

const requestHandler = (req, res)=>{
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<header><title>Enter Message</title></header>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end;
    }
    
    
    if (url === '/message' && method === 'POST') {
        const body = [];
    
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
    
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })
    
    
    }
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<header><title>My First page</title></header>');
    res.write('<body><h1>hello from Node.js Sever!</h1></body>');
    res.write('</html>');
    res.end;
}

//export file
//module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'some hard coded text'
// };

exports.handler = requestHandler;
exports.someText = 'some hard coded text';