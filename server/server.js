var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

// needed for middleware
var bodyParser = require('body-parser');

// why "here"?
app.middleware('initial', bodyParser.urlencoded({ extended: true }));

app.start = function() {
  return app.listen(function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
  });
};

boot(app, __dirname, function(err) {
  if (err) throw err;
  
  if (require.main === module)
    app.start();
});
