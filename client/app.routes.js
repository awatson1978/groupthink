Router.map(function() {
  this.route('landingRoute', {
    path: '/',
    template: 'landingPage'
  });
  this.route('rulesRoute', {
    path: '/rules',
    template: 'rulesPage'
  });

  this.route('topicsRoute', {
    path: '/topics',
    template:'topicsPage',
    before: function(){
      if(!Meteor.userId()){
        this.render("entrySignIn");
        this.stop();
      }
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
    }
  });

});





