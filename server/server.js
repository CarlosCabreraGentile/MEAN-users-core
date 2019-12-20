const express = require('express');
const app = express();
const cors = require('cors');

var mongoose = require('mongoose');
var port = process.env.PORT || 3001;
var connection = require('./database');

//Database connection
mongoose.Promise = global.Promise;
mongoose.connect(connection.database, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('DB Connected!'))
    .catch(err => {
    console.log(`DB Connection Error: ${err.message}`);
    });

//CORS Middleware
app.use(cors());

// CORS Middleware
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization, DhlAuthToken');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });

//Settings

//Middleware
/**
 * Converts the JSON format code that comes from the browser
 * and the server can handle 
 */
app.use(express.json());


//Routers 
var userRouter = require('./routes/userRouter');

//Mount routes
app.use('/user', userRouter);

app.listen(port, () => {
    console.log('Server running on port: ' + port);
});