Accounts.onCreateUser(function(options, user) {
  // We still want the default hook's 'profile' behavior.
  console.log(JSON.stringify(user));
  user.username = options.email.split("@")[0];
  user.profile = {};
  user.profile.name = options.email.split("@")[0];
  user.profile.avatar = "/images/icons/Default_User.jpg";
  user.profile.role = "User";

//  if(options.profile){
//    user.profile = options.profile;
//  }
  user.profile.bio = "";
  user.profile.interests = "";

  //Roles.addUsersToRoles(user._id, user.profile.role);
  return user;
});