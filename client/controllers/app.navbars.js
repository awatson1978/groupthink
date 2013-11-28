

Template.navbarHeader.navbarBrandLink = function(){
  if(Meteor.userId()){
    if(Session.set('forum_topic_id')){
      return '/forum';
    }else{
      return '/topics'
    }
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

Template.navbarFooter.isTopicsPage = function(){
  if(Session.get('current_page') == 'Topics'){
    return true;
  }else{
    return false;
  }
};
Template.navbarFooter.isForumPage = function(){
  if(Session.get('current_page') == 'Forum'){
    return true;
  }else{
    return false;
  }
};
Template.navbarFooter.isPostPage = function(){
  if(Session.get('current_page') == 'Post'){
    return true;
  }else{
    return false;
  }
};


toggleSession = function(variable){
  if(Session.get(variable)){
    Session.set(variable, false);
  }else{
    Session.set(variable, true);
  }
}