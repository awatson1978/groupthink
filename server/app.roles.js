
Meteor.methods({
  isAdmin: function (userId) {
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
