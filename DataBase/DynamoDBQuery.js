import { DynamoDB } from "./DynamoDBConfig.js"
import { QueryCommand } from "@aws-sdk/lib-dynamodb";

export class DynamoDBQuery extends DynamoDB
{
    constructor(awsRegion,awsEndPoint)
    {
        super(awsRegion,awsEndPoint);
    };

    async queryTable(queryCommandJson) {
        const command = new QueryCommand(queryCommandJson);
        const response = await this.docClient.send(command);
        console.log("Command Execution Completed");
        console.log(response);
        return response;
    };
      
}