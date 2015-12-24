module.exports = {
  db: process.env.MONGOLAB_URI,
  sessionSecret: 'MEAN',
  sessionCollection: 'sessions'
};
