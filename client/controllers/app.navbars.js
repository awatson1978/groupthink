Template.navbarHeader.isLoggedIn = function(){
    if(Meteor.userId()){
        return true
    }else{
        return false;
    }
};

Template.navbarHeader.navbarBrandLink = function(){
  if(Meteor.userId()){
    return '/forum';
  }else{
    return '/';
  }
}
Template.navbarHeader.navbarBrandName = function(){
  if(Meteor.userId()){
    return 'Custom Forum Name';
  }else{
    return 'Group Think';
  }
}