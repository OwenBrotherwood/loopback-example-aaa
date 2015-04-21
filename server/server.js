/*
* Play time for Owen Brotherwood, DK 2015
*
/

// http://docs.strongloop.com/display/public/LB/config.json
var loopback = require('loopback');
var boot = require('loopback-boot');
var app = module.exports = loopback();

// http://docs.strongloop.com/display/public/LB/Defining+middleware
// needed for middleware: I would love to not have these 2 lines in server.js
var bodyParser = require('body-parser');
app.middleware('initial', bodyParser.urlencoded({ extended: true }));

app.start = function() {
  return app.listen(function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
  });
};

// http://docs.strongloop.com/display/public/LB/Defining+boot+scripts
boot(app, __dirname, function(err) {
  if (err) throw err;
  
  if (require.main === module) // use case for when one would not app.start()?
    app.start();
});
