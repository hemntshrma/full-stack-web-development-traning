const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

// API section 



app.post('/insert-person', (request, response) => {
    console.log(`request receivced is  = ${JSON.stringify(request.body)}`)
    response.send(`Person name is ${request.body.personName}`)
})

app.post('/insert-person-1', (request, response) => {
    console.log(`request receivced is  = ${JSON.stringify(request.body)}`)
    response.json(request.body.address
       
    )
})




/*
path ='/insert-person
http method - post
request ={
"personName": "panipat",
"officeAddress": "gurugram"
}
*/ 


app.listen(port, () => {
    console.log("my backend server is started at port" + port)
})