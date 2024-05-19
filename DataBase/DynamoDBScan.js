import { DynamoDB } from "./DynamoDBConfig.js"
import { ScanCommand  } from "@aws-sdk/lib-dynamodb";

export class DynamoDBScan extends DynamoDB
{
    constructor(awsRegion,awsEndPoint)
    {
        super(awsRegion,awsEndPoint);
    };

    async scanTable(scanCommandJson) {
        //Need to implement this.
    };
      
}