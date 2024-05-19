//Importing required modules.
import { tableObj , operationsObj , queryObj } from "./DataBase/index.js";
import StudentTableConfigData from "./Configurations/StudentTableCreationConfig.json"  assert { type: 'json' };

// *********** Create an Table *********** 
const createTableResponse = tableObj.createTable(StudentTableConfigData);

// ***********  Delete Table *********** 
const tableToDelete = 
{
    TableName: "Student_table",
}
const deleteTableReponse = tableObj.deleteTable(tableToDelete);

// ***********  List Tables *********** 
const listTableResponse = tableObj.listTables();

// ***********  Get Item from Table *********** 
const itemToGet =
{
    TableName: "Student_table",
    Key: {
        "id": "1",
        "Name": "Rohan"
    },
};
const getItemResponse = operationsObj.getItem(itemToGet);

// ***********  Put Item from Table *********** 
const itemToPut =
{
    TableName: "Student_table",
    Item: {
        "id": "1",
        "Name": "Rohan"
    },
}
const putItemResponse = operationsObj.putItem(itemToPut);

// ***********  Query Table *********** 
const queryCmd =
{
    TableName: "Student_table",
    KeyConditionExpression:
        'id = :ID',
    ExpressionAttributeValues: {
        ':ID': '1'
    },
    ConsistentRead: true,
}
const queryResponse = queryObj.QueryTable(queryCmd);