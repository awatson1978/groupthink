Session.setDefault('topic_search', '');
Session.setDefault('person_search', '');
Session.setDefault('tags_search', '');
Session.setDefault('excluded_topic', '');
Session.setDefault('excluded_tags', '');

Session.setDefault('forum_topic_id', '');
Session.setDefault('forum_topic', '');


Template.forumPage.getPreferredProfileTheme = function(){
  if(Meteor.userId()){
    return getPreferredTheme();
  }else{
    return 'panel-default';
  }
};
Template.forumPage.getPreferredButtonTheme = function(){
  return getPreferredButtonTheme();
};

Template.forumPage.posts = function(){
  return Posts.find({'topicId': Session.get('forum_topic_id')},{$sort:{ createdAt: -1 }});
};
Template.forumPage.getForumTopic = function(){
  var record = Topics.findOne({_id: Session.get('forum_topic_id')});
  if(record){
    return record.topic;
  }else{
    return '---';
  }
};
Template.forumPage.getForumTopicId = function(){
  return Session.get('forum_topic_id');
};
Template.forumPage.showSearchPanel = function(){
  if(Session.get('show_search_panel')){
    return true;
  }else{
    false;
  }
};


//----------------------------------------------------
// postItem

// SECURITY HOLE:  this function can be hacked by users in the terminal
canEdit = function(postId){
  var post = Posts.findOne(postId);
  if(post.creatorId === Meteor.userId()){
    return true;
  }else{
    if(Meteor.user().role === "Admin"){
      return true;
    }else{
      return false;
    }
  }
};
Session.setDefault('selected_post_id', false);
Template.chatItem.events({
  'click .by-me, tap .by-me':function(){
    if(Session.get('selected_post_id') === this._id){
      Session.set('selected_post_id', false);
      Session.set('selected_post_creator_id', false);
    }else if(Session.get('selected_post_id')){
      if(canEdit(this._id)){
        Session.set('selected_post_id', this._id);
        Session.set('selected_post_creator_id', this.creatorId);
      }
    }else{
      if(canEdit(this._id)){
        Session.set('selected_post_id', this._id);
        Session.set('selected_post_creator_id', this.creatorId);
      }
    }
  },
  'dblclick .list-group-item':function(){
    if(this.creatorId === Meteor.userId()){
      Router.go('/posts/' + this._id);
    }
  },
  'click #createPostButton, tap #createPostButton':function(){
    Session.set('user_intent', 'newpost');
    Router.go('/posts/' + this._id);
  }
});
Template.chatItem.isSelectedItem = function(){
  if(Session.get('selected_post_id')  === this._id){
    return "selected-post";
  }else{
    return "";
  }
};


Template.chatItem.getTopic = function(){
  if(this.topicId){
    return Topics.findOne(this.topicId).topic;
  }else{
    return '...';
  }
};

Template.chatItem.getWebsite = function(){
  if(this.weblink){
    return this.weblink;
  }else{
    return '';
  }
};

Template.chatItem.getPostAvatar = function(){
  if(Meteor.users.findOne(this.creatorId)){
    var user = Meteor.users.findOne(this.creatorId);
    if(user.profile.avatar){
      return user.profile.avatar;
    }else{
      return '/images/icons/Default_User.png';
    }
  }else{
    return '/images/icons/Default_User.png';
  }
};
Template.chatItem.getPostCreatorId = function(){
  return this.creatorId;
};
Template.chatItem.creatorName = function(){
  if(this.createdBy){
    return this.createdBy;
  }else{
    return '---';
  }
};

Template.chatItem.tagObjects = function(){
  return _.map(this.tags || [], function (tag) {
    return {todo_id: this._id, tag: tag};
  });
};
Template.chatItem.addingTag = function () {
  return Session.equals('editing_addtag', this._id);
};
Template.chatItem.events({
  'click .addtag': function (evt, tmpl) {
//    Session.set('editing_addtag', this._id);
//    Meteor.flush(); // update DOM before focus
//    activateInput(tmpl.find("#edittag-input"));
  },
  'click .remove': function (evt) {
//    var tag = this.tag;
//    var id = this.todo_id;
//
//    evt.target.parentNode.style.opacity = 0;
//    // wait for CSS animation to finish
//    Meteor.setTimeout(function () {
//      Todos.update({_id: id}, {$pull: {tags: tag}});
//    }, 300);
//    Meteor.flush();
  }
});