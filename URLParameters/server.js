const express = require('express') 
const app = express() 
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const profile = [{
  username: 'Yash',
  email: '[reducted]',
  url: 'http://anything.co'
}]

app.get('/profile', (req, res)=>{
    if(req.query.id) 
        return res.send(profile[req.query.id])
    res.send(profile)
})

app.post('/profile', (req, res) => {
  profile.push(req.body)
  console.log('created',profile)
  res.sendStatus(201)
})

app.put('/profile/:id', (req, res)=>{
  Object.assign(profile[req.params.id], req.body)
  console.log('updated',profile[req.params.id])
  res.sendStatus(204)
})

app.delete('/profile/:id', (req, res)=>{
  profile.splice(req.params.id,1)
  console.log('deleted',profile)
  res.sendStatus(204)
})

app.listen(3000)

//Multiple URL parameters
// 
// app.get('/users/:id/transactions/:transactionId/:filter', (req, res) => {
//     const usersId = request.params.id,
//     transactionId = request.params.transactionId,
//     filter = request.params.filter
//   res.status(200).send()
// })