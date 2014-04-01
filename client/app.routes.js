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

// Router.configure({
//   layoutTemplate: 'layout',
//   yieldTemplates: {
//       'navbarHeader':{to: 'header'},
//       'navbarFooter':{to: 'footer'}
//     }
// });

Router.map(function() {
  this.route('landingRoute', {
    path: '/',
    template: 'landingPage',
    before: function(){
      Session.set('current_page', 'Landing');
    },
    after: function() {
      setPageTitle("Home");
    }
  });
  this.route('guidelinesRoute', {
    path: '/guidelines',
    template: 'guidelinesPage',
    before: function(){
      Session.set('current_page', 'Guidelines');
    },
    after:function() {
      setPageTitle("Guidelines");
    }
  });

  this.route('topicsRoute', {
    path: '/topics',
    template:'topicsPage',
    before: function(){
      checkUserSignedIn(this);
      Session.set('current_page', 'Topics');
    },
    after: function() {
      setPageTitle("Topics");
    }
  });
  this.route('forumRoute', {
    path: '/forum',
    template:'topicsPage',
    before: function(){
      checkUserSignedIn(this);
      Session.set('current_page', 'Forum');
    },
    after: function() {
      setPageTitle("List of topics");
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
      Meteor.subscribe('posts');
      return Meteor.subscribe('topics');
    },
    after: function() {
      setPageTitle("Forum");
    }
  });
  this.route('dogfoodRoute', {
    path: '/public',
    template: 'chatWidgetPage',
    //template:'forumPage',
    before: function(){
      //Session.set('forum_topic_id', 'CvydqH5rhpzNcjf7B');
      Session.set('current_page', 'Forum');
    },
    waitOn: function(){
      Meteor.subscribe('posts');
      return Meteor.subscribe('settings');
    },
    after: function() {
      setPageTitle("Forum");
    }
  });

  this.route('profileRoute', {
    path: '/profile',
    template:'profilePage',
    before: function(){
      checkUserSignedIn(this);
      Session.set('current_page', 'Profile');
    },
    after: function() {
      setPageTitle("Your Profile");
    }
  });
  this.route('adminRoute', {
    path: '/admin',
    template:'adminPage',
    before: function(){
      checkUserSignedIn(this);
      Session.set('current_page', 'Admin');
    },
    after: function() {
      setPageTitle("Admin");
    }
  });
  this.route('usersListRoute', {
    path: '/users',
    template:'usersListPage',
    before: function(){
      checkUserSignedIn(this);
      Session.set('current_page', 'Admin');
    },
    waitOn: function(){
      Meteor.subscribe('settings');
      return Meteor.subscribe('usersDirectory');
    },
    after: function() {
      setPageTitle("Admin");
    }
  });

  this.route('postInputRoute', {
    path: '/post',
    template:'postInputPage',
    before: function(){
      checkUserSignedIn(this);
      Session.set('current_page', 'Post');
    }, after: function() {
      setPageTitle("New Post");
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
    after: function() {
      setPageTitle("Viewing Post");
    }
  });
});



