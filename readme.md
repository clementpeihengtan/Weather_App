# Documentation

For this assignmnet, I am using reactjs to create my web application and mongodb as my database.

For now, I am not sure how does the IoT device will be connected to the web application. We assume that it is send into the web application as a json array. It will then be save to the database. Since the new data will be available every 60 seconds. postWeatherData will get called to add new data to database. getWeatherData will get called to update the data on the website. 

The reason I am using react js is that it is supported in different operating system. It can be use along side with node js. If it is necessary, we can easily convert the web application to mobile application using react native. 

The reason I am using mongodb, is because it is easy to scale out, when data gets more and more, it is still easy to handle. It is also much faster to query and update data. 

# How to run

Run the command below in the file directory.

```
> npm install
> npm start
```

To test the functionality of database. Change the BASE URL in data-api.js and make some minor modification on the url. The data should be able to get populated on the website. Database is not yet setup.