Session.setDefault('user_intent', 'createpost');

Template.postInputPage.isNewTopic = function(){
  if(Session.get('user_intent') === 'newtopic'){
    return true;
  }else{
    return false;
  }
};
Template.postInputPage.isNewPost = function(){
  if(Session.get('user_intent') === 'createpost'){
    return true;
  }else{
    return false;
  }
};
Template.postInputPage.rendered = function(){
  $('#editor').wysiwyg();
};

Session.setDefault('selected_post_id', false);
Template.postInputPage.post = function(){
  console.log(Session.get('selected_post_id'));

    if(Session.get('selected_post_id')){
      return Posts.findOne(Session.get('selected_post_id'));
    }else{
      var foo = {
        creatorId: '',
        createdBy: 'Jane Doe',
        createdAt: new Date(),
        topicId: '',
        text: 'Lorem ipsum...',
        image: '',
        tags: []
      };
      console.log(foo);
      return foo;
    }
};
Template.postInputPage.getText = function(){
  console.log('getText...');
  console.log(Session.get('selected_post_id'));
  if(Session.get('selected_post_id')){
    var post = Posts.findOne(Session.get('selected_post_id'));
    console.log(post);
    if(post){
      return post.text;
    }else{
      return '';
    }
  }else{
    return '';
  }
};
Template.postInputPage.events({
//  'click .createPostButton':function(){
//    console.count('click .create-post-btn');
//    console.log('Meteor.userId(): ' + Meteor.userId());
//    console.log(Meteor.user());
//    console.log('Meteor.user().profile.username: ' + Meteor.user().profile.username);
//
//    var topicId = Topics.insert({
//      topic: $('#topicInput').val()
//    });
//    Posts.insert({
//      creatorName: Meteor.user().profile.username,
//      text: $('#editor').cleanHtml(),
//      image: $('#imageInput').val(),
//      weblink: $('#weblinkInput').val(),
//      tags: $('#postTagsInput').val(),
//      creatorId: Meteor.userId(),
//      createdAt: new Date(),
//      topicId: topicId
//    });
//    Session.set('user_intent', 'createpost');
//    Router.go('/forum/' + Session.get('forum_topic_id'));
//  },
  'click .submitPostButton, tap .submitPostButton':function(){
    console.count('click .submit-post-btn');
    console.log('Meteor.userId(): ' + Meteor.userId());
    console.log(Meteor.user());

    console.log('Meteor.user().profile.username: ' + Meteor.user().profile.name);
    Posts.insert({
      createdBy: Meteor.user().profile.name,
      text: $('#editor').cleanHtml(),
      image: $('#imageInput').val(),
      weblink: $('#weblinkInput').val(),
      creatorId: Meteor.userId(),
      createdAt: new Date(),
      topicId: Session.get('forum_topic_id')
    });
    Topics.update(Session.get('forum_topic_id'), {$inc: {replies: 1 }});
    Router.go('/forum/' + Session.get('forum_topic_id'));
  },
  'click .updatePostButton, tap .updatePostButton':function(){
    console.count('click .update-post-btn');
    console.log('Meteor.userId(): ' + Meteor.userId());
    console.log(Meteor.user());

    console.log('Meteor.user().profile.username: ' + Meteor.user().profile.username);

    Posts.update(Session.get('selected_post_id'),{
      $set: {
        creatorName: Meteor.user().profile.username,
        text: $('#editor').cleanHtml(),
        image: $('#imageInput').val(),
        weblink: $('#weblinkInput').val(),
        creatorId: Meteor.userId(),
        lastModifiedAt: new Date()
      },
      $addToSet:{
        tags: $('#postTagsInput').val()
      }
    });

    Session.set('user_intent', 'updatepost');
    Router.go('/forum/' + Session.get('forum_topic_id'));
  },
  'click .cancelPostButton, tap .cancel-post-btn': function(){
    Router.go('/forum/' + Session.get('forum_topic_id'));
  },
  'click .fa-times, tap .fa-times':function(){
    Posts.update(Session.get('selected_post_id'), {$pull: {tags: this.tag }});
  }
})


Template.postInputPage.getPreferredProfileTheme = function(){
  return getPreferredTheme();
};
Template.postInputPage.getPreferredButtonTheme = function(){
  return getPreferredButtonTheme();
};
Template.postInputPage.tagObjects = function(){
  return _.map(this.tags || [], function (tag) {
      return {todo_id: Session.get('selected_post_id'), tag: tag};
  });
};
Template.postInputPage.getTags = function(){
  return this.tags;
};
