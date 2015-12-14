exports.render = function(req, res) {
  res.render('index', {
  title: 'Hello World',
  description: "YAAY, It's Working finally"
  });
};
