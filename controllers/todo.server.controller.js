var mongoose = require('mongoose'),
  ToDo = mongoose.model('ToDo');

var getErrorMessage = function(err) {
  if (err.errors) {
    for (var errName in err.errors) {
      if (err.errors[errName].message) return err.errors[errName].
        message;
    }
  } else {
    return 'Unknown server error';
  }
};

exports.create = function(req, res) {
  var todo = new ToDo(req.body);
  todo.save(function(err) {
    if(err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    }
    else {
      res.json(todo);
    }
  });
};

exports.update = function(req, res) {
  var todo = req.todo;

  todo.title = req.body.title;
  todo.completed = req.body.completed;

  todo.save(function(err) {
    if(err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    }
    else {
      res.json(todo);
    }
  });
};


exports.delete = function(req, res) {
  var todo = req.todo;

  todo.remove(function(err) {
    if(err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    }
    else {
      res.json(todo);
    }
  });
};

exports.list = function(req, res) {
  ToDo.find().sort('-createdAt').exec(function(err, todos) {
    if(err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    }
    else {
      res.json(todos);
    }
  });
};

exports.todoByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'ToDo is invalid'
    });
  }

  ToDo.findById(id).exec(function (err, todo) {
    if (err) {
      return next(err);
    } else if (!todo) {
      return res.status(404).send({
        message: 'No article with that identifier has been found'
      });
    }
    req.todo = todo;
    next();
  });
};
