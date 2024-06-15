const express= require('express')
const app = express()
const dynamoDb = require('./DynamoDb/dynamoDbOperation')
const port=3000
var bodyParser = require('body-parser')
const dynamoDbRoute=require("./routes/dynamoDb-routes")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
  
app.use('/dynamoDb',dynamoDbRoute)

// app.post('/insert',(req,res)=>{
//     console.log(req.body)
//     dynamoDb.insertData(req.body)
//     res.send("Data recieved")
// })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })