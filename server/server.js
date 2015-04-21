var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

// extras for boot (check why this was not added with slc loopback ...
var path = require('path');

// extra for views
var bodyParser = require('body-parser');

// why "here"?
app.middleware('initial', bodyParser.urlencoded({ extended: true }));

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;
  
  // app.set ... why not in a views.js boot file ...?
  app.set('view engine', 'ejs'); // LoopBack comes with EJS out-of-box
  app.set('json spaces', 2); // format json responses for easier viewing

  // must be set to serve views properly when starting the app via `slc run` from
  // the project root
  app.set('views', path.resolve(__dirname, 'views'));

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
