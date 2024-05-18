var AWS= require('aws-sdk')

const ServiceConfigurationOptions = {
    region: "fakeRegion",
    endpoint: "http://localhost:8000",
  };

  var docClient= new AWS.DynamoDB.DocumentClient(ServiceConfigurationOptions)
  let studentDetails=[
    {
        "id":"2",
        "Name":"Arnold"
    },
    {
        "id":"3",
        "Name":"Singh"
    },
    {
        "id":"4",
        "Name":"John jones"
    }
  ]
//   var params = {
//     TableName: "Student_table",
//     Item: {
//         "id": 1,
//         "Name": "Dhanush",    
//     }
    
// };

studentDetails.forEach((student)=>{
    console.log("Student Data",student)
    var params = {
        TableName: "Student_table",
        Item: {
            "id": student.id,
            "Name": student.Name,    
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
})




