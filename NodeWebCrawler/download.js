const http = require('http')
const fs = require('fs')
const path = require('path')
const uuidv1 = require('uuid/v1')

const downloadPage = (url)=>{
    
    const fetchPage = (urlF,callback)=>{
        buff=''
        http.get(urlF, (response)=> {
            response.on('data',(chunk)=>{
                buff+=chunk
            })
            response.on('end',()=>{
                console.log(buff)
                callback(null,buff)
            })
        }).on('error',(error)=>{
            console.error('Got Error: ',error.message)
            callback(error)
        })
    }

    const folderName = uuidv1()
    fs.mkdir(folderName)
    fetchPage(url,(error,data)=>{
        if(error){
            return console.log(error)
        }
        fs.writeFileSync(path.join(__dirname,folderName,'url.txt'),url)
        fs.writeFileSync(path.join(__dirname,folderName,'file.html'),data)
        console.log('downloading is done in folder ',folderName)
    })
}

downloadPage(process.argv[2])