'use strict';
/**
 * Module dependencies.
 */
var init = require('./config/init')(),
	config = require('./config/config');

// Init the express application
var app = require('./config/express')(null);

// Start the app by listening on <port>
app.listen(config.port);

// Logging initialization
console.log('Application started on port ' + config.port);