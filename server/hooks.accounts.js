Accounts.onCreateUser(function(options, user) {
  // We still want the default hook's 'profile' behavior.
  console.log('*****************************');
  console.log(JSON.stringify(user));
  console.log('-----------------------------');
  console.log(JSON.stringify(options));
  console.log('=============================');


  user.profile = options.profile;
  user.configuration = options.configuration;
  user.role = options.role;


  console.log(JSON.stringify(user));
  console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
  return user;
});