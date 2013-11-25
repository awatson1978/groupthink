

Template.navbarHeader.navbarBrandLink = function(){
  if(Meteor.userId()){
    return '/forum';
  }else{
    return '/';
  }
}
Template.navbarHeader.navbarBrandName = function(){
  if(Session.get('settingsLoaded')){
    return Session.get('siteName');
  }else{
    return 'Site not ready...';
  }
};
Template.navbarHeader.events({
  'click #signUpButton':function(){
    Router.go('/sign-up');
  },
  'click #headerTitle':function(){
    Router.go('/');
  }
});


Template.navbarFooter.isAdmin = function(){
  console.log(Meteor.user().role);
  if(Meteor.user().role === "Admin"){
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