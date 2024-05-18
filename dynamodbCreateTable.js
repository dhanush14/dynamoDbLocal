var Student_table=require("./Json/student_table.json")
var AWS= require('aws-sdk')
AWS.config.update({region:"fakeRegion"})


const ServiceConfigurationOptions = {
    region: "fakeRegion",
    endpoint: "http://localhost:8000",
  };

  var dynamoDb= new AWS.DynamoDB(ServiceConfigurationOptions)
  var docClient = new AWS.DynamoDB.DocumentClient(ServiceConfigurationOptions)

  dynamoDb.createTable(Student_table,function(err,data){
    if(err){
        console.log("Error",err)
    }
    else{
        console.log("Table created",data)
    }
  });

  



