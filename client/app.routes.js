var setPageTitle = function(newTitle) {
  //Seperate method for internationalization;
  var siteName = (Session.get('systemConfigs') || {}).name;
  document.title = newTitle + " - " + siteName;
}
checkUserSignedIn = function(scope){
  if(!Meteor.userId()){
    Session.set('currentPage', 'entrySignIn');
    scope.render("entrySignInPage");
    scope.stop();
  }else{
    scope.render("navbarHeader",{to: 'header'});
    //scope.render("sidebarTemplate",{to: 'aside'});
  }
};


Router.configure({
  layoutTemplate: "mainLayout"
})

Router.map(function() {
  this.route('landingRoute', {
    path: '/',
    template: 'landingPage',
    onBeforeAction: function(){
      Session.set('current_page', 'Landing');
    },
    onAfterAction: function() {
      setPageTitle("Home");
    }
  });
  this.route('guidelinesRoute', {
    path: '/guidelines',
    template: 'guidelinesPage',
    onBeforeAction: function(){
      Session.set('current_page', 'Guidelines');
    },
    onAfterAction:function() {
      setPageTitle("Guidelines");
    }
  });

  this.route('topicsRoute', {
    path: '/topics',
    template:'topicsPage',
    onBeforeAction: function(){
      checkUserSignedIn(this);
      Session.set('current_page', 'Topics');
    },
    onAfterAction: function() {
      setPageTitle("Topics");
    }
  });
  this.route('forumRoute', {
    path: '/forum',
    template:'topicsPage',
    onBeforeAction: function(){
      checkUserSignedIn(this);
      Session.set('current_page', 'Forum');
    },
    onAfterAction: function() {
      setPageTitle("List of topics");
    }
  });
  this.route('specificForumRoute', {
    path: '/forum/:_id',
    template:'forumPage',
    onBeforeAction: function(){
      if(!Meteor.userId()){
        this.render("entrySignIn");
        this.stop();
      }else{
        Session.set('forum_topic_id', this.params._id);
      }
      Session.set('current_page', 'Forum');
    },
    waitOn: function(){
      Meteor.subscribe('posts');
      return Meteor.subscribe('topics');
    },
    onAfterAction: function() {
      setPageTitle("Forum");
    }
  });
  this.route('dogfoodRoute', {
    path: '/public',
    template: 'chatWidgetPage',
    //template:'forumPage',
    onBeforeAction: function(){
      //Session.set('forum_topic_id', 'CvydqH5rhpzNcjf7B');
      Session.set('current_page', 'Forum');
    },
    waitOn: function(){
      Meteor.subscribe('posts');
      return Meteor.subscribe('settings');
    },
    onAfterAction: function() {
      setPageTitle("Forum");
    }
  });

  this.route('profileRoute', {
    path: '/profile',
    template:'profilePage',
    onBeforeAction: function(){
      checkUserSignedIn(this);
      Session.set('current_page', 'Profile');
    },
    onAfterAction: function() {
      setPageTitle("Your Profile");
    }
  });
  this.route('adminRoute', {
    path: '/admin',
    template:'adminPage',
    onBeforeAction: function(){
      checkUserSignedIn(this);
      Session.set('current_page', 'Admin');
    },
    onAfterAction: function() {
      setPageTitle("Admin");
    }
  });
  this.route('usersListRoute', {
    path: '/users',
    template:'usersListPage',
    onBeforeAction: function(){
      checkUserSignedIn(this);
      Session.set('current_page', 'Admin');
    },
//    waitOn: function(){
//      Meteor.subscribe('settings');
//      return Meteor.subscribe('usersDirectory');
//    },
    onAfterAction: function() {
      setPageTitle("Admin");
    }
  });

  this.route('postInputRoute', {
    path: '/post',
    template:'postInputPage',
    onBeforeAction: function(){
      checkUserSignedIn(this);
      Session.set('current_page', 'Post');
    }, onAfterAction: function() {
      setPageTitle("New Post");
    }
  });

  this.route('postInputRoute', {
    path: '/posts/:_id',
    data: function() { return Posts.findOne(this.params._id); },
    template: 'postInputPage',
    onBeforeAction: function(){
      if(!Meteor.userId()){
        this.render("entrySignIn");
        this.stop();
      }else{
        Session.set('selected_post_id', this.params._id);
        Session.set('current_page', 'Post');
        if(Session.get('user_intent') != "createpost"){
          Session.set('user_intent', 'updatepost');
        }
      }
      console.log('router....');
      console.log(Session.get('selected_post_id'));
    },
    waitOn: function(){
      Meteor.subscribe('topics');
      return Meteor.subscribe('onePost', this.params._id);
    },
    onAfterAction: function() {
      setPageTitle("Viewing Post");
    }
  });
});
