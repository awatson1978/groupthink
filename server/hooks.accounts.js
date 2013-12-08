Accounts.onCreateUser(function(options, user) {
  // We still want the default hook's 'profile' behavior.
  console.log('*****************************');
  console.log(JSON.stringify(user));
  console.log('-----------------------------');
  console.log(JSON.stringify(options));
  console.log('=============================');

  var service = getUserService(user);

  user.profile = options.profile;
  user.configuration = options.configuration;
  user.role = options.role;

  //Avatars for various services
  if(service == "facebook") {
    user.profile.avatar = "http://graph.facebook.com/" + user.services.facebook.id + "/picture?type=square";
  }else if(service == "github") {
      user.profile.avatar = user.services.github.avatar_url;
  }else if(service == "google") {
    user.profile.avatar = user.services.google.picture
  }


  console.log(JSON.stringify(user));
  console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
  return user;
});