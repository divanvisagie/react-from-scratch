const express = require('express')

const bodyParser = require('body-parser')

let todos = ['First Todo from server']

app = express()

app.use(bodyParser.json())

app.get('/todo', (req, res) => {
    res.send(todos)
})

app.post('/todo', (req, res) => {
    const body = req.body.todo
    todos.push(body)
    res.send(todos)
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`server is listening on port ${process.env.PORT || 3000}`)
})

