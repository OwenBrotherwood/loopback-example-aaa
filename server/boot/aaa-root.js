module.exports = function(app) {
  var User = app.models.user;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;

  User.findOrCreate({where:{username:'root'}},[
    {username: 'root', email: 'root@localhost.local', password: 'Passw0rd'},
  ], function(err, users) {
    if (err) throw err;

    console.log('Created root: An opinion as if this should be done by default and not clear text');

    //create the root role: preferably with only one member root
    Role.create({
      name: 'root'
    }, function(err, role) {
      if (err) throw err;

      console.log('Created role: root');

      // assign root to root role
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[0].id
      }, function(err, principal) {
        if (err) throw err;

        console.log('Created principal root ');
      });
    });
  });
};
