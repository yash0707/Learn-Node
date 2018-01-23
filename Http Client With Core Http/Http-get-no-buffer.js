const http = require('http')

const url = 'http://nodeprogram.com'
c=0
http.get(url,(response) => {
    response.on('data',(chunk)=>{
        c++
        console.log(chunk.toString('utf8'))
    } )

    response.on('end',()=>{
        console.log('response ended with',c,' chunks')
    })
}).on('error',(error)=> {
    console.log('Got Error: , ${error.message}')
})

// Number of Chunks may vary depending upon the network.