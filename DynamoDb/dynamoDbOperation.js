require('dotenv').config()
var AWS= require('aws-sdk')
const dynamoDbHelper=require('./dynamoDbHelper')
const ServiceConfigurationOptions = {
    region: "eu-north-1",
    credentials:{
        accessKeyId:process.env.AWS_ACCESS_KEY,
        secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY
    }
  };

var docClient= new AWS.DynamoDB.DocumentClient(ServiceConfigurationOptions)

;
function insertData(re,res){
    AWS.config.update({
        region: "eu-north-1",
        credentials:{
            accessKeyId:process.env.AWS_ACCESS_KEY,
            secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY
        }
    })
    const dynamoDb=new AWS.DynamoDB({apiVersion:'2012-08-10'})
    console.log("Inside insertData",re.body)
    var params = {
        TableName: 'Design_1',
        Item:{
            "PK": {
            S: "#ELECTRONICS"
          },
          "SK": {
            S: "#EC_EARPHONES_APPLE"
          },
            "brandItems": {
              L: [
                {
                  M: {
                    "description": {
                      S: "asdf"
                    },
                    "id": {
                      S: "1"
                    },
                    "name": {
                      S: "I phone 15"
                    },
                    "ratings": {
                      S: ""
                    }
                  }
                }
              ]
            }
          }
      }
      console.log("Param contents",params)
    dynamoDb.putItem(params,(err,data)=>{
        if(err){
            console.log("Error while adding the data",err)
            res.status(404).json("Could not find the data")
        }
        else{
            console.log("Succes",data)
            res.status(200).json(data)
          
        }
    
    })
}

function getDynamoDbData(re,res){
    console.log("Inside getDynamoDbData")
    const params={
        TableName: 'Design_1',
        KeyConditionExpression: re.body.partitionKey+'= :pk',
        ExpressionAttributeValues: {
          ':pk': re.body.partitionKey_value,             
        }
    }
    console.log(params)

    docClient.query(params,(err,data)=>{
            if(err){
                console.log("Error while querying the data",err)
                res.status(404).json("Could not find the data")
            }
            else{
                res.status(200).json(data)
            }
    })

}

module.exports={insertData,getDynamoDbData}





