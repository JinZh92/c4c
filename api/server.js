var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

// Configuration
app.use(express.static(__dirname + './../'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Routes
var sheet_routes = require('./routes/sheet');
var filedir_routes = require('./routes/filedir');
var mailer_routes = require('./routes/mailer');

// End Points
app.use('/api/sheet', sheet_routes);
app.use('/api/filedir', filedir_routes);
app.use('/api/mailer', mailer_routes);

// Listen
app.listen(8080, function() {
	console.log('Server Started on http://localhost:8080');
	console.log('Press CTRL + C to stop server');
});

