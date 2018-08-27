//require
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

//require routes
const addRouter = require('./public/router/add.route');
const manageRouter = require('./public/router/manage.route');
const favRouter = require('./public/router/fav.route')

//config bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//static files
app.use(express.static('server/public'));

//router usage
app.use('/', addRouter);
app.use('/manage', manageRouter);
app.use('/fav', favRouter);

//start up sever
app.listen(PORT, () => {
    console.log('server is up and running on PORT', PORT); 
}); //end of listen