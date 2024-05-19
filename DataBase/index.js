//Importing Required Modules.
import { DynamoDBTable } from "./DynamoDBTable.js";
import { DynamoDBQuery } from "./DynamoDBQuery.js";
import { DynamoDBOperations } from "./DynamoDBOperations.js";
import DynamoDBConfigData from "../Configurations/DynamoDBConfig.json" assert { type: 'json' };

//Creating object of classes.
export const tableObj = new DynamoDBTable( DynamoDBConfigData.myAwsRegion, DynamoDBConfigData.myAWSEndPoint );
export const queryObj = new DynamoDBQuery( DynamoDBConfigData.myAwsRegion, DynamoDBConfigData.myAWSEndPoint );
export const operationsObj = new DynamoDBOperations ( DynamoDBConfigData.myAwsRegion, DynamoDBConfigData.myAWSEndPoint );