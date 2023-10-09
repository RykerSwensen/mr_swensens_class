/*Functions*/
const express = require('express');
const app = express();
const cors = require('cors');

/*Middleware*/
app.use(express.json()); //req.body
app.use(cors());

/*Routes*/

/*Register and login routes.*/
app.use('/auth', require('./routes/jwtAuth'));

/* Declare the port to listen on. I am using 5000. */
app.listen(5000, () => {
    console.log('Server is running on port 5000')
});