const express = require('express')
const app = express()

//MiddleWare :- Every piece of request go through this block of code inside app.use

//In case of multiple app.use sequential execution of blocks takes place,i.e., 
//app.use which is defined prior will execute first than app.use defined after.

app.use((req,res,next)=>{
    console.log(`${req.method}: ${req.url}`)   //ES6 way of printing
    next()
})

app.use((req,res,next)=>{

    if(req.query.api_key)
    {
        next()
    }
    else{
        res.status(401).send({msg:'Not Authorized'})
    }
})

app.get('/',(req,res)=>{
    res.send({msg:'hello world'})
})
//If we want for particular /accounts to have some code execute before this then

// app.get('/accounts',(req,res,next)=>{
//     console.log('accounts inline middleware ')
//     next()
// },(req,res)=>{
//     res.send({msg:'accounts'}) 
// })


//Error Handler
app.get('/accounts',(req,res,next)=>{
    console.log('accounts inline middleware ')
    next(new Error('oops'))
},(req,res)=>{
    res.send({msg:'accounts'}) 
})


app.get('/transactions',(req,res)=>{
    res.send({msg:'transactions'})
})

app.use((error,req,res,next)=>{
    res.status(500).send(error)
})
app.listen(3000)