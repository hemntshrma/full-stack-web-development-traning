// import express module
const express = require('express')
// intialize app with express function
const app = express();
// define port
const port = 3000

/*
API section
*/
app.get('/april'), (request, response) => {

    response.send('this is my first api')
}

// start server [node server.js]
app.listen(port, () => {
    console.log("my server is started at port" + port)
})