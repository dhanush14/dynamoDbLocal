# dynamoDbLocal

step 1:
npm install aws-sdk
npm install uuid

Step2:
    https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html
    Download the zip from here and then run the below commands

    1.To run dynamodb locally

            Go to dynamodb_local_latest folder --> Run below command there ->
            java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb

    2.When it starts open another terminal
        and run below command
        aws dynamodb list-tables --endpoint-url http://localhost:8000

step3:
    1.to create table run 
        node dynamodbCreateTable.js
    2. to add the data
        node dynamodbOperations.js
