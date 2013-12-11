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


Meteor.methods({
  isAdmin: function (userId) {
    check(userId, String);

    try{
      console.log('checking if user ' + userId + ' is an Admin...');
      var user = Meteor.users.findOne(userId);
      console.log(user.role);
      if(user.role === "Admin"){
        return true;
      }else{
        return false;
      }
    }catch(error){
      console.log(error);
      return false;
    }
  },
  isModerator: function (userId) {
    check(userId, String);

    try{
      console.log('checking if user ' + userId + ' is a Moderator...');
      var user = Meteor.users.findOne(userId);
      if(user.profile.role === "Moderator"){
        return true;
      }else{
        return false;
      }
    }catch(error){
      console.log(error);
      return false;
    }
  },
  isEditor: function (userId) {
    check(userId, String);

    try{
      console.log('checking if user ' + userId + ' is an Editor...');
      var user = Meteor.users.findOne(userId);
      if(user.profile.role === "Editor"){
        return true;
      }else{
        return false;
      }
    }catch(error){
      console.log(error);
      return false;
    }
  }
});
