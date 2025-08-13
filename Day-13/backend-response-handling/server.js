import express from 'express'
//create app variable
const app = express()
//define port number
const port = 3000

//define request  parsing
app.use(express.json())

//API section start
app.get('/test', (req, res) => {

    console.log(`request is ${JSON.stringify(req.body)}`)
    res.send("api is working")
})

app.get('/read-user', (req, res) => {
    let user = {
        name: "hemant",
        age: 19,
    }
  
       
  if (user.name === "null")
    res.status(400).send("data not found")
else
    res.status(200).json(user)
})
//API section end

//start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
