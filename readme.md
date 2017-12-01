# Documentation

For this assignmnet, I am using react.js to create my web application and mongodb as my database.

For now, I am not sure how does the IoT device will be connected to the web application. We assume that it is send into the web application as a json array. It will then be save to the database. Since the new data will be available every 60 seconds. postWeatherData will get called to add new data to database. getWeatherData will get called to update the data on the website. 

# Problem requirement
Design and implement a web application that collects local weather data from a simulated IoT device via a REST API. 

1. The web application should save the data in a database and display it in an interactive visualization. 
2. Assume the IoT device reports the device ID, timestamp, temperature, and humidity.
3. Assume new data is available every 60 seconds.

# Analysis

Based on the requirement, I have to decide which framework should I used to develop the web application.

1. Front end
- Options: React, AngularJS
- My choice: React
- Reason: React has better performance than Angular due to React's implementation of virutal DOM. The web application I am designing require constantly updating user interface from the database. With React, this increase the efficiency of rendering the web app, as it only rerun the part that we make changes. 

2. Back end 
- Options: express.js, meteor.js
- My choice: express.js
- Reason: Meteor provides full stack development framework for developer which means backend development framework is also available. However, some of the libraries are stopped develop and maintain by the community, which will cause inconvenient in the future. Since I have decided to use react as my front end framework, why bother working with meteor which provide full stack framework. Plus express.js is much more light weighted than meteor.js.


3. Databases
- Options: mongodb, MySQL
- My Choice: mongodb
- Reason: We know that the database going to grow very large as time goes as every 60 seconds new data will be obtained and stored in database. And we will need to constantly read and write from the database in order to do so and to update the UI. Mongodb is what we looking for. It has the capability to store large volumes of data. And since in 75F, Cloud services is very important to process the data. Mongodb can load high volume of data and givve us lots of flexibility and availability in a cloud based environment. It has built in sharding solutions that make it easy to partition and spread out data across multiple servers. It is also easy to scale the database to connect ot other hardware or in cloud without the need of additional software. 


# Problem encounter (Solved)

When I was trying to access a different domain to get the data, browser doesn't allow me to query data from other domain due to security issue. In order to simulate a similar environment, I created a sample json file on my github repository and query data from there. If I was able to redirect the content of the database to my current domain, I am able to get the data without any problem. 

# Requirement 

You must install [node.js]('https://nodejs.org/en/download/') and npm before run the command below. 

# How to run

1. To start up the server, you need to have monogdb available
2. Go to <mark>src/components</mark>

```
$ node server.js
```
This start up the server to get the data from mongodb database.

3. Go up one level and  run the command below in the file directory.

```
$ npm install
$ npm start
```

4. Web application will run at [http://localhost:3000](http://localhost:3000).
5. Server will run at [http://localhost:3001/api/data](http://localhost:3001/api/data).