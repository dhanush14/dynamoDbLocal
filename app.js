const express= require('express')
const app = express()
const dynamoDb = require('./DynamoDb/dynamoDbOperation')
const port=3000
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
  
app.get('/',(req,res)=>{
    res.send("Hi This is Dhanush")
})

app.post('/insert',(req,res)=>{
    console.log(req.body)
    dynamoDb.insertData(req.body)
    res.send("Data recieved")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })