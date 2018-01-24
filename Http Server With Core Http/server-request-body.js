const http = require('http')

const port = 3000

http.createServer((req,res)=>{
    console.log(req.headers)
    console.log(req.method)
    console.log(req.url)
    console.log(req.statusCode)

    if(req.method == 'POST')
    {
        var buff = ''
        req.on('data',(chunk)=>{
            buff+=chunk
        })
        req.on('end',()=>{
            console.log(`BODY: ${buff}`)
            res.end('\nAccepted data.')
        })
    }
    else{
        res.writeHead(200,{'Content-Type': 'text/plain' })
        res.end('Hello Yash\n')
    }
}   ).listen(port)