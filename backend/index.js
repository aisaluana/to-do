const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const todoList = ['buy paper', 'eat vegetables'];

app.get('/todo', (req, res) => {
  res.send(todoList)
})

app.post('/todo', (req, res) => {
  const data = req.body;
  console.log(data);
  todoList.push(data.item)
  res.send('ok');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
