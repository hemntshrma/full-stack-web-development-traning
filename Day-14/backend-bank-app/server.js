// const express = require('express') 
import express from 'express'
import connectToDatabase from './db.js'

const app = express()
const port = 3000

app.use(express.json())


app.get('/test', (req, res) => {
    res.send("api is working")
})





// start server
app.listen(port, async () => {
    console.log(`my server is running at ${port}`)
    await connectToDatabase('bank-db');
})