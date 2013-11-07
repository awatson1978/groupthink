Template.topicsPage.getPreferredProfileTheme = function(){
  return getPreferredTheme();
};
Template.topicsPage.getPreferredButtonTheme = function(){
  return getPreferredButtonTheme();
};

//Template.topicsPage.addTopicIsVisible = function(){
//    return Session.get('is_add_topic_visible');
//}

Template.topicsPage.topics = function(){
  return Topics.find();
}
Template.topicsPage.showSearchPanel = function(){
  if(Session.get('show_search_panel')){
    return true;
  }else{
    false;
  }
}

Session.setDefault('is_add_topic_visible', false);
Template.topicsPage.events({
  'click #createTopicButton': function(){
    Session.set('user_intent', 'newtopic');
    Router.go('/post');
  },
  'click .delete-topic-btn': function(){
    Topics.remove(this._id);
    //alert('deleting: ' + this._id);
  }
})

Template.topicsPage.events({
  'click .list-group-item':function(){
    //alert(this._id);
    Session.set('forum_topic_id', this._id);
    Session.set('forum_topic', this.topic);
    Router.go('/forum');
  }
})

Template.topicItem.isAdmin = function(){
  if(Session.get('is_admin')){
    return true;
  }else{
    return false;
  }
}

//toggleSession = function(variable){
//    if(Session.get(variable)){
//        Session.set(variable, false);
//    }else{
//        Session.set(variable, true);
//    }
//}