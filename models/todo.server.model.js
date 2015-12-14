var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ToDoSchema = new Schema({
  title: String,
  completed: Boolean,
  createdAt: Date,
  updatedAt: Date
});

ToDoSchema.pre('save', function(next){
  if(this.isNew) {
    this.createdAt = Date.now();
  }
  this.updatedAt = Date.now();
  next();
});

mongoose.model('ToDo', ToDoSchema);
