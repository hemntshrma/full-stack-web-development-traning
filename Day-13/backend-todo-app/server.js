// const express = require('express') 
import express from 'express'

const app = express()
const port = 3000

app.use(express.json())


app.get('/test', (req, res) => {
    console.log(`request is ${JSON.stringify(req.body)}`)
    res.send("api is working")
})


// API 1 create todo
app.post('/insert-todo', (req, res) => {
    console.log(`request is ${JSON.stringify(req.body)}`)
    res.send("todo created successfully")
})

// API 2 Read a single todo
app.get('/read-one-todo', (req, res) => {
    console.log(`read todo with id = ${req.query.id}`)
    let todoObj = {
        "id": 1,
        "name": "ram",
        "rollNo": 123
    }
    res.json(todoObj);
})

// API 3 read all todos
app.get('/read-many-todo', (req, res) => {
    console.log(`request is ${JSON.stringify(req.body)}`)
    let todoArr = [
        {
            "id": 1,
            "name": "ram",
            "rollNo": 123
        },
        {
            "id": 2,
            "name": "shyam",
            "rollNo": 456
        }
    ]
    res.json(todoArr)
})

// API 4 update todo
app.patch('/update-todo', (req, res) => {
    console.log(`todo id = ${req.query.id}`)
    console.log(`update data = ${req.body}`)
    res.send("todo updated successfully")
})


// API 5 delete todo
app.delete('/delete-todo', (req, res) => {
    console.log(`delete todo with id = ${req.query.id}`)
    res.send("todo deleted successfully")
})


// start server
app.listen(port, () => {
    console.log(`my server is running at ${port}`)
})