// import express module
const express = require('express')
// intialize app with express function
const app = express()
// define port
const port = 3000

/*
API section
*/

app.get('/api-1', (request, response) => 
{
    response.send('this is our first API')

})

app.get('/test-api', (request, response) => {
    response.send('my test api is working')
})

app.get('/api-2', (request, response) =>
{
    response.send('my test api 3 is working fine')
} )

app.get('/homepage-admin', (request, response) =>
    {
        response.send('this is website homepage')
    }) 

    app.post('/insert-user', (request, response) => {
        console.log('content of server is $(request)')
        response.send('user inserted successfully')
    })

// start server [node server.js]
app.listen(port, () => {
    console.log("server is started at "+ port)
})