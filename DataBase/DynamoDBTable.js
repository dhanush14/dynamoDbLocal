import { DynamoDB } from "./DynamoDBConfig.js"
import { CreateTableCommand , DeleteTableCommand , ListTablesCommand } from "@aws-sdk/client-dynamodb";

export class DynamoDBTable extends DynamoDB
{
    constructor(awsRegion,awsEndPoint)
    {
        super(awsRegion,awsEndPoint);
    };

    async createTable(tableCreationConfig) {
        const command = new CreateTableCommand(tableCreationConfig);
        const response = await this.client.send(command);
        console.log("Command Execution Completed");
        console.log(response);
        return response;
    };

    async deleteTable(tableDetailsJson) {
        const command = new DeleteTableCommand(tableDetailsJson);
        const response = await this.client.send(command);
        console.log("Command Execution Completed");
        console.log(response);
        return response;
    };

    async listTables() {
        const command = new ListTablesCommand({});
        const response = await this.client.send(command);
        console.log("Command Execution Completed");
        console.log(response);
        return response;
    };
      
    
}