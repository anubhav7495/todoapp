process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express'),
  mongoose = require('./config/mongoose');

var db = mongoose();
var app = express();

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
  console.log('app is running on port', app.get('port'));
});

module.exports = app;
