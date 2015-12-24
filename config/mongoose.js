var config = require('./config'),
  mongoose = require('mongoose');

module.exports = function() {
  var db = mongoose.connect(process.env.MONGOLAB_URI || config.db);

  require('../models/todo.server.model');
  return db;
}
