/*
 * Can this authentication.js take care of some more authentication tasks  ...?
 * http://docs.strongloop.com/display/public/LB/Making+authenticated+requests
 * 
 */
module.exports = function enableAuthentication(server) {
  // enable authentication
  server.enableAuth();
};
