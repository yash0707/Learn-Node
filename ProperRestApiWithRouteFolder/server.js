const express = require('express')
const logger = require('morgan')
const routes = require('./routes')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')

var store = {
    posts:[
        {
            name: 'yash',
            url: 'https://anything.com',
            text: 'Hello how are you.',
            comments:[
                {text: 'firstComment'},
                {text: 'secondComment'},
                {text: 'thirdComment'}
            ]
        }
    ]
}

var app = express()

app.use(bodyParser.json())
app.use(logger('dev'))
app.use('errorhandler')

//best way to access store of this file in another file is through request.
//So
app.use((req,res,next)=>{
    req.store = store
    next()
})

app.get('/posts',routes.posts.getPosts)
app.post('/posts',routes.posts.addPost)
app.put('/posts/:postId',routes.posts.updatePost)
app.delete('posts/:postId',routes.posts.removePost)