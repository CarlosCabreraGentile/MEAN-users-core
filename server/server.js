const express = require('express');
const app = express();

var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var connection = require('./database');

//Database connection
mongoose.Promise = global.Promise;
mongoose.connect(connection.database, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('DB Connected!'))
    .catch(err => {
    console.log(`DB Connection Error: ${err.message}`);
    });
    
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
app.use('/api/user', userRouter);

app.listen(port, () => {
    console.log('Server running on port: ' + port);
});