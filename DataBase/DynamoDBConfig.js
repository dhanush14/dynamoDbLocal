// Importing required Modules.
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";


// Main Parent Class for DynamoDB.
export class DynamoDB
{
    // Configures the DynamoDB Client.
    constructor(awsRegion,awsEndPoint)
    {
        const dynamoDbConfig = {
            region : awsRegion,
            endpoint : awsEndPoint 
        };

        this.client = new DynamoDBClient(dynamoDbConfig);
        this.docClient = DynamoDBDocumentClient.from(this.client);
       
    };

};