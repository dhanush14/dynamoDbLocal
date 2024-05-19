var AWS= require('aws-sdk')
const ServiceConfigurationOptions = {
    region: "fakeRegion",
    endpoint: "http://localhost:8000",
  };

var docClient= new AWS.DynamoDB.DocumentClient(ServiceConfigurationOptions)

function insertData(res){
    console.log("Res",res)
    const params={
        TableName: "Student_table1",
        Item: res
    }
    docClient.put(params,(err,data)=>{
        if(err){
            console.log("Error while adding the data",err)
        }
        else{
            console.log("Succes",data)
          
        }
    
    })
}

module.exports={insertData}





