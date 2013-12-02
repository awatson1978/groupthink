Handlebars.registerHelper('isLoggedIn', function() {
  if(Meteor.userId()){
    return true
  }else{
    return false;
  }
});
Handlebars.registerHelper('isAdmin', function() {
  Meteor.call('isAdmin', Meteor.userId(), function(error, result){
    if(error){
      console.log(error);
      return false;
    }
    if(result){
      console.log(result);
      return true;
    }
  });
});
