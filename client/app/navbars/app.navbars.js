

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
  'click #signUpButton, tap #signUpButton':function(){
    Router.go('/sign-up');
  },
  'click #headerTitle, tap #headerTitle':function(){
    Router.go('/');
  }
});
Template.navbarHeader.userName = function(){
  var user = Meteor.user()
  if(user){
    return user && user.profile && user.profile.name;
  }else{
    return "---";
  }
}


Session.setDefault('forum_admin_buttons', false);
Template.navbarFooter.events({
  'click .admin-panel, tap .admin-panel':function(){
    toggleSession('is_admin');
  },
  'click .search-panel, tap .search-panel':function(){
    toggleSession('show_search_panel');
  },
  'click #editPostButton, tap #editPostButton':function(){
    Session.set('user_intent', 'editpost');
    Router.go('/posts/' + Session.get('selected_post_id'));
  },
  'click #deletePostButton, tap #deletePostButton':function(){
    Posts.remove(Session.get('selected_post_id'));
    Topics.update(Session.get('forum_topic_id'), {$inc: {replies:  -1 }});
  }
});

Template.navbarFooter.canEdit = function(){
  if(Session.get('selected_post_creator_id') === Meteor.userId()){
    return true;
  }else{
    if(Meteor.user()){
      if(Meteor.user().role === "Admin"){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
  }
};
Template.navbarFooter.isTopicsPage = function(){
  if(Session.get('current_page') == 'Topics'){
    return true;
  }else{
    return false;
  }
};
Template.navbarFooter.isForumPage = function(){
  if(Session.get('current_page') == 'Forum'){
    if(Session.get('selected_post_id')){
      return true;
    }else{
      return false;
    }
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