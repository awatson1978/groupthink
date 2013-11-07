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

Template.navbarFooter.isAdmin = function(){
  if(Session.get('is_admin')){
    return true;
  }else{
    return false;
  }
}

Template.navbarFooter.events({
  'click .admin-panel':function(){
    toggleSession('is_admin');
  },
  'click .search-panel':function(){
    toggleSession('show_search_panel');
  }
});


toggleSession = function(variable){
  if(Session.get(variable)){
    Session.set(variable, false);
  }else{
    Session.set(variable, true);
  }
}