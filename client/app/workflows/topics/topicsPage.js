Session.setDefault('forum_topic_id', false);

//-------------------------------------------------------------
// TopicsPage

Template.topicsPage.getPreferredProfileTheme = function(){
  return getPreferredTheme();
};
Template.topicsPage.getPreferredButtonTheme = function(){
  return getPreferredButtonTheme();
};
Template.topicsPage.showSearchPanel = function(){
  if(Session.get('show_search_panel')){
    return true;
  }else{
    false;
  }
};

Template.topicsPage.topics = function(){
  return Topics.find();
};


Session.setDefault('is_add_topic_visible', false);
Template.topicsPage.events({
  'click #createTopicButton, tap #createTopicButton': function(){
    if(Session.get('is_creating_new_topic')){
      Session.set('is_creating_new_topic', false);
    }else{
      Session.set('is_creating_new_topic', true);
    }
  },
  'click .delete-topic-btn, tap .delete-topic-btn': function(){

  },
  'click #newTopicSave, tap #newtopicSave':function(){
    Topics.insert({topic: $('#newTopicInput').val(), createdBy: Meteor.user().profile.name, createdAt: new Date(), creatorId: Meteor.userId() })
    Session.set('is_creating_new_topic', false);
  },
  'click #newTopicCancel, tap #newTopicCancel':function(){
    Session.set('is_creating_new_topic', false);
  }
});

Template.topicsPage.events({
  'click .media, tap .media':function(){
    if(Session.get('forum_admin_buttons') === false){
      Session.set('forum_topic_id', this._id);
      Session.set('forum_topic', this.topic);
      Meteor.users.update(Meteor.userId(), {$set: {'profile.currentTopic': this._id }});
      Topics.update(this._id, {$inc: { views: 1 }, $set: { lastPostId: Meteor.userId(), lastPostBy: Meteor.user().profile.name }});
      Router.go('/forum/' + this._id);
    }
  },
  'click #toggleForumAdminButton, tap #toggleForumAdminButton': function(){
    if(Session.get('forum_admin_buttons')){
      Session.set('forum_admin_buttons', false);
    }else{
      Session.set('forum_admin_buttons', true);
    }
  }
});


Session.setDefault('is_creating_new_topic', false);
Template.topicsPage.creatingNewTopic = function(){
  return Session.get('is_creating_new_topic');
};
Template.topicsPage.getLockIcon = function(){
  if(Session.get('forum_admin_buttons')){
    return 'fa-unlock';
  }else{
    return 'fa-lock';
  }
};

//-------------------------------------------------------------
// TopicItem

Template.topicItem.getTopicOwner = function(){
  return this.createdBy;
};
Template.topicItem.getTopicDate = function(){
  return this.createdAt;
};
Template.topicItem.getNumberReplies = function(){
  return this.replies;
};
Template.topicItem.getNumberViews = function(){
  return this.views;
};
Template.topicItem.getLastUpdatedBy = function(){
  return this.lastPostBy;
};
Template.topicItem.getLastUpdate = function(){
  return moment(this.lastPostAt).format('YYYY-MM-DD');
};
Template.topicItem.showForumAdminButtons = function(){
 return Session.get('forum_admin_buttons');
};
Template.topicItem.getLockButtonText = function(){
  if(this.locked){
    return "Unlock";
  }else{
    return "Lock";
  }
};
Template.topicItem.events({
  'click #promoteTopicButton, tap #promoteTopicButton':function(event){
    event.preventDefault();
    alert('promote');
  },
  'click #lockTopicButton, tap #lockTopicButton':function(event){
    if(this.locked){
      Topics.update(this._id, {$set: {locked: false }});
    }else{
      Topics.update(this._id, {$set: {locked: true }});
    }
  },
  'click #deleteTopicButton, tap #deleteTopicButton':function(event){
    Topics.remove(this._id);
  }
});

