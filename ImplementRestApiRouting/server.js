const express = require('express') 
const app = express() 
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const profile = {
  username: 'Yash',
  email: '[reducted]',
  url: 'http://anything.co'
}

app.get('/profile', (req, res)=>{
  res.send(profile)
})

app.post('/profile', (req, res) => {
  profile = req.body
  console.log('created',profile)
  res.sendStatus(201)
})

app.put('/profile', (req, res)=>{
  Object.assign(profile, req.body)
  console.log('updated',profile)
  res.sendStatus(204)
})

app.delete('/profile', (req, res)=>{
  profile ={}
  console.log('deleted',profile)
  res.sendStatus(204)
})

app.listen(3000)




// Instruction to request from terminal

// 1. GET Request:-  
// curl "http://localhost:3000/profile"          
// 2. POST Request:- 
// curl -H "Content-Type: application/json" -X POST -d '{"first_name":"Yash"}' localhost:3000/profile
// 3. PUT Request:-
// replace with PUT in place of POST
// 4. DELETE Request:-
// curl -X DELETE localhost:3000/profile