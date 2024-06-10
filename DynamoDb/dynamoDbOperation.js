require('dotenv').config()
var AWS= require('aws-sdk')
const ServiceConfigurationOptions = {
    region: "eu-north-1",
    credentials:{
        accessKeyId:process.env.AWS_ACCESS_KEY,
        secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY
    }
  };

var docClient= new AWS.DynamoDB.DocumentClient(ServiceConfigurationOptions)

;
function insertData(re){
    console.log("Res",ServiceConfigurationOptions)
    var params = {
        TableName: 'Design_1',
        KeyConditionExpression: re.partitionKey+'= :pk',
        ExpressionAttributeValues: {
          ':pk': re.partitionKey_value,             
        }
      }
    docClient.query(params,(err,data)=>{
        if(err){
            console.log("Error while adding the data",err)
        }
        else{
            console.log("Succes",data)
          
        }
    
    })
}

module.exports={insertData}





