var loopback = require('loopback'); // http://apidocs.strongloop.com/loopback/
var app = module.exports = loopback(); // find out module.exports
var boot = require('loopback-boot'); // http://apidocs.strongloop.com/loopback-boot/

// http://docs.strongloop.com/display/public/LB/Working+with+LoopBack+objects#WorkingwithLoopBackobjects-Workingwiththeappobject
// http://docs.strongloop.com/display/public/LB/config.json
// http://docs.strongloop.com/display/public/LB/Defining+middleware

// needed for middleware: I would love to not have these 2 lines in server.js
var bodyParser = require('body-parser');
app.middleware('initial', bodyParser.urlencoded({ extended: true })); // http://apidocs.strongloop.com/loopback/#app-middleware

// app.use(app.loopback.token({ model: app.models.accessToken }));

app.start = function() {
  return app.listen(function() { // http://apidocs.strongloop.com/loopback/#app-listen
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
  });
};

// http://docs.strongloop.com/display/public/LB/Defining+boot+scripts
boot(app, __dirname, function(err) { // http://apidocs.strongloop.com/loopback-boot/
  if (err) throw err;
  if (require.main === module) // use case for when one would not app.start()?
    app.start();
});
