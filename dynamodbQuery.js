var AWS = require('aws-sdk')
const ServiceConfigurationOptions = {
    region: "fakeRegion",
    endpoint: "http://localhost:8000",
  };

  var docClient= new AWS.DynamoDB.DocumentClient(ServiceConfigurationOptions)

  var param_query={
    TableName: "Student_table",
    KeyConditionExpression: 'id = :s',
    ExpressionAttributeValues: {
        ':s': '2',
      }
}

docClient.query(param_query,(err,data)=>{
    if (err) console.log(err);
   else console.log(data);
})