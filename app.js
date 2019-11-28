const express = require('express'); //require express
const path = require('path'); // create path varibles to consume our application
const app = express();
app.use('/static', express.static('public')); //serve a static files sush as images,cssfiles, and js

app.get('/', function (req, res) {  // create a route an use callback function
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(8080);  // start the applocation at the port 8080