/*
 * Can this authentication.js take care of some more authentication tasks  ...?
 * http://docs.strongloop.com/display/public/LB/Making+authenticated+requests
 * http://docs.strongloop.com/display/public/LB/Working+with+LoopBack+objects
 * http://docs.strongloop.com/display/public/LB/Working+with+LoopBack+objects#WorkingwithLoopBackobjects-Fromabootscript
 */
 
  module.exports = function(app){
   app.enableAuth();
   app.use(app.loopback.token({ model: app.models.accessToken }));
 }
 
/*
* - where does server come from, can only find ref to app in boot
* - finally, I guessed server === app and loopback could be ref from app
*/
 /*
 module.exports = function enableAuthentication(app) { 
  app.enableAuth();
};
*/
