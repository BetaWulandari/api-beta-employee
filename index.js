const express = require('express');
const bodyParser = require('body-parser'); // body parser utk membaca body di json

// create express app
const app = express();
// setup server port
const port = process.env.PORT || 5000;
// parse request of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}))
// parse request of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
    res.send("Hello World! Beta");
});
// require employee route
const employeeRoute = require('./route/employeeRoute')
// using as middleware
app.use('/employee', employeeRoute)
// listen for request
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})