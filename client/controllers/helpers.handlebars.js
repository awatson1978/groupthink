Handlebars.registerHelper('isLoggedIn', function() {
  if(Meteor.userId()){
    return true
  }else{
    return false;
  }
});
Handlebars.registerHelper('isAdmin', function() {
  if(Meteor.user().role === "Admin"){
    return true
  }else{
    return false;
  }
});
