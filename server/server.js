//require
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

//require routes
const addRouter = require('./public/router/add.route');

//config bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//static files
app.use(express.static('server/public'));

//router usage
app.use('/', addRouter);

//start up sever
app.listen(PORT, () => {
    console.log('server is up and running on PORT', PORT); 
}); //end of listen