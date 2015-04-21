/*
 * Can this authentication.js take care of some more authentication tasks  ...?
 * http://docs.strongloop.com/display/public/LB/Making+authenticated+requests
 * http://docs.strongloop.com/display/public/LB/Working+with+LoopBack+objects
 * http://docs.strongloop.com/display/public/LB/Working+with+LoopBack+objects#WorkingwithLoopBackobjects-Fromabootscript
 */
 /*
* - where does server come from, can only find ref to app in boot
* - can one get server from app and change to:
* module.exports = funcion(app){
*   app.something.server.enableAuth();
*   app.use(loopback.token({ model: app.models.accessToken }));
* }
*/
module.exports = function enableAuthentication(server) { 
  // enable authentication
  server.enableAuth();
};
