import { DynamoDB } from "./DynamoDBConfig.js"
import { GetCommand , PutCommand } from "@aws-sdk/lib-dynamodb";

export class DynamoDBOperations extends DynamoDB
{
    constructor(awsRegion,awsEndPoint)
    {
        super(awsRegion,awsEndPoint);
    };

    async getItem(getJson) {
        const command = new GetCommand(getJson);
        const response = await this.docClient.send(command);
        console.log("Command Execution Completed");
        console.log(response);
        return response;
    };

    async putItem(putJson) {
        const command = new PutCommand(putJson);
        const response = await this.docClient.send(command);
        console.log("Command Execution Completed");
        console.log(response);
        return response;
    };
    
}