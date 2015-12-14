var todo = require('../controllers/todo.server.controller');

module.exports = function(app) {
  app.route('/api/todos')
    .get(todo.list)
    .post(todo.create);

  app.route('/api/todos/:id')
    .put(todo.update)
    .delete(todo.delete);

  app.param('id', todo.todoByID);    
};
