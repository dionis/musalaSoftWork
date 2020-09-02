# musalaSoftWork

The software was developed using the SalisJS framework (https://sailsjs.com/) and Angular version 8.

The database used was in-memory but the code is compatible with MongoDB (It was not used because to achieve the deployment in Heroku, it did not have all the requirements (credit card) for the deployment of the Mongo Dino).

Note: The system generates two Test Gateways and associates several Devices with each one as test data. The data was generated using the JavaScript library or module faker.

Automatic construction:
  Requirement: node version 10.5.1 or higher.
  From the project directory.
1- npm install.
2- npm test (execution of all tests)
3- npm start
4- In the browser going to the address http: //localhost: 4200 to see the GUI.
5- In the browser going to the address http://localhost: 1337 to see the data of the Gateway and Device created as tests or add to the system.
To analyze the test suite, go to: <Code source address>\test\integration\controllers

The tests were conducted using the Mocha and Supertest Javascript testing framework.

The GUI was prepared for create, delete and update Gateway and Devices information but without time for test.
