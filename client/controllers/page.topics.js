Session.setDefault('forum_topic_id', false);

Template.topicsPage.getPreferredProfileTheme = function(){
  return getPreferredTheme();
};
Template.topicsPage.getPreferredButtonTheme = function(){
  return getPreferredButtonTheme();
};


Template.topicsPage.topics = function(){
  return Topics.find();
};
Template.topicItem.getTopicOwner = function(){
  return 'System Admin';
};
Template.topicItem.getTopicDate = function(){
  return moment(new Date()).format('YYYY-MM-DD, hh:mm');
};
Template.topicItem.getNumberReplies = function(){
  return 0;
};
Template.topicItem.getNumberViews = function(){
  return 0;
};
Template.topicItem.getLastUpdatedBy = function(){
  return 'System Admin';
};
Template.topicItem.getLastUpdate = function(){
  return moment(new Date()).format('YYYY-MM-DD, hh:mm');
};



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
    if(Session.get('is_creating_new_topic')){
      Session.set('is_creating_new_topic', false);
    }else{
      Session.set('is_creating_new_topic', true);
    }
  },
  'click .delete-topic-btn': function(){
    Topics.remove(this._id);
  },
  'click #newTopicSave, tap #newtopicSave':function(){
    Topics.insert({topic: $('#newTopicInput').val()})
    Session.set('is_creating_new_topic', false);
  },
  'click #newTopicCancel, tap #newTopicCancel':function(){
    Session.set('is_creating_new_topic', false);
  }
});

Template.topicsPage.events({
  'click .media':function(){
    Session.set('forum_topic_id', this._id);
    Session.set('forum_topic', this.topic);
    Meteor.users.update(Meteor.userId(), {$set: {'profile.currentTopic': this._id }});
    Router.go('/forum/' + this._id);
  }
});


Session.setDefault('is_creating_new_topic', false);
Template.topicsPage.creatingNewTopic = function(){
  return Session.get('is_creating_new_topic');
};