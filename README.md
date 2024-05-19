# dynamoDbLocal

step 1:run npm install

step 2: check whether dynamodb is running or not if not start the dynamodb server

step 3: create the table, i have used Student_table1 

step 4: run node app.js

step5: in postman hit the url(POST)-  http://localhost:3000/insert

postman body:

{
  "id":"1",
  "Name": "abcd"
}
