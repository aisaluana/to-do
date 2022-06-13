const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const todoList = ['buy paper', 'eat vegetables'];

app.get('/todo', (req, res) => {
  res.send(todoList)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
