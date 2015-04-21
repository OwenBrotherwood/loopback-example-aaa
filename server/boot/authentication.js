/*
 * Can this authentication.js take care of some more authentication tasks  ...?
 * http://docs.strongloop.com/display/public/LB/Making+authenticated+requests
 * http://docs.strongloop.com/display/public/LB/Working+with+LoopBack+objects
 * http://docs.strongloop.com/display/public/LB/Working+with+LoopBack+objects#WorkingwithLoopBackobjects-Fromabootscript
 */
 
 // I still need to check what app.looback.token is doing and if it works in this context
  module.exports = function enableAuthentication(app){ // or function(app) ...???
   // any requirements on order of these two?
   app.enableAuth(); // http://apidocs.strongloop.com/loopback/#app-enableauth : very terse API comment, any doc?
   app.use(app.loopback.token({ model: app.models.accessToken })); // http://apidocs.strongloop.com/loopback/#loopback-token
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
