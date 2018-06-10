const http = require('http')

http.createServer((req, res)=>{
    res.end('Hola mundo')
}).listen(3000)