module.exports = function(app){
  var path = require('path');

  app.set('view engine', 'ejs'); // LoopBack comes with EJS out-of-box
  app.set('json spaces', 2); // format json responses for easier viewing
  app.set('views', path.resolve(__dirname, '../views'));
}
