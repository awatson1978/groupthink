Router.map(function() {
  this.route('landingRoute', {
    path: '/',
    template: 'landingPage',
    before: function(){
      Session.set('current_page', 'Landing');
    }
  });
  this.route('guidelinesRoute', {
    path: '/guidelines',
    template: 'guidelinesPage',
    before: function(){
      Session.set('current_page', 'Guidelines');
    }
  });

  this.route('topicsRoute', {
    path: '/topics',
    template:'topicsPage',
    before: function(){
      if(!Meteor.userId()){
        this.render("entrySignIn");
        this.stop();
      }
      Session.set('current_page', 'Topics');
    }
  });
  this.route('forumRoute', {
    path: '/forum',
    template:'forumPage',
    before: function(){
      if(!Meteor.userId()){
        this.render("entrySignIn");
        this.stop();
      }
      Session.set('current_page', 'Forum');
    }
  });
  this.route('specificForumRoute', {
    path: '/forum/:_id',
    template:'forumPage',
    before: function(){
      if(!Meteor.userId()){
        this.render("entrySignIn");
        this.stop();
      }else{
        Session.set('forum_topic_id', this.params._id);
      }
      Session.set('current_page', 'Forum');
    },
    waitOn: function(){
      return Meteor.subscribe('posts');
      return Meteor.subscribe('topics');
    }
  });

  this.route('profileRoute', {
    path: '/profile',
    template:'profilePage',
    before: function(){
      if(!Meteor.userId()){
        this.render("entrySignIn");
        this.stop();
      }
      Session.set('current_page', 'Profile');
    }
  });
  this.route('adminRoute', {
    path: '/admin',
    template:'adminPage',
    before: function(){
      if(!Meteor.userId()){
        this.render("entrySignIn");
        this.stop();
      }
      Session.set('current_page', 'Admin');
    }
  });

  this.route('postInputRoute', {
    path: '/post',
    template:'postInputPage',
    before: function(){
      if(!Meteor.userId()){
        this.render("entrySignIn");
        this.stop();
      }
      Session.set('current_page', 'Post');
    }
  });

  this.route('postInputRoute', {
    path: '/posts/:_id',
    data: function() { return Posts.findOne(this.params._id); },
    template: 'postInputPage',
    before: function(){
      if(!Meteor.userId()){
        this.render("entrySignIn");
        this.stop();
      }
      Session.set('current_page', 'Post');
    }
  });

});





