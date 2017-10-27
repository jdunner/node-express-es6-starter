#Node.js Express ES6 Starter Application

This project is designed to be used as a starter to quickly get writing your application logic with the below features pre-configured

##Features
* Custom Dependency Injection for Services and Data Access
    * _TODO_ Describe the approach
* ES6 with Babel
* Unit Testing
    * **_Unit testing_** is provided by Mocha/Chai framework
    * **_Debugging_** see image for IntelliJ Run/Debug Configuration for Mocha Debugging
* Code Coverage
    * Test Coverage reports are provided by Istanbul and it's CLI 'nyc'. There is some configuration needed in the .babelrc file for this. And there is a task in the script array of the package.json to run.
* JSON only responses (no View layer)
* Authentication
* Docker
* Data Access Layer
    * _TODO_ Discuss whether there is ORM or not (Mongoose?)
    * _TODO_ Mention about DI and the ability to give an Interface/Implementation/Template to the DAO to query a specific DB technology
