const express=require('express')
const router= express.Router()
const dynamoDb=require("../DynamoDb/dynamoDbOperation")

router.post('/insert',dynamoDb.insertData)
router.post('/query',dynamoDb.getDynamoDbData)

module.exports=router;

