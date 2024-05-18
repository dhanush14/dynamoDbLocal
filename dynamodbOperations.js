var AWS= require('aws-sdk')

const ServiceConfigurationOptions = {
    region: "fakeRegion",
    endpoint: "http://localhost:8000",
  };

  var docClient= new AWS.DynamoDB.DocumentClient(ServiceConfigurationOptions)
  var params = {
    TableName: "Student_table",
    Item: {
        "id": "1",
        "Name": "Dhanush",    
    }
    
};

docClient.put(params,(err,data)=>{
    if(err){
        console.log("Error while adding the data",err)
    }
    else{
        console.log("Succes",data)
    }

})
