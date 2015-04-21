// 
// Simple audit 
//
module.exports = function(app){
 for (model in app.models){
   console.log(app.models[model]);


/*
 * I have absolutly no idea as to access the constructor of the model that will be queried as described in operation hooks for access
 */
/*
   model.observe('access', function logAccess(ctx, next){
     console.log('Access %s matching %s', ctx.model.modelName, ctx.query.where);
     next();
   }); 
*/
 } 
}

