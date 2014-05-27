Meteor.subscribe('topics');

Meteor.subscribe('usersDirectory');
Meteor.subscribe('userProfile', Meteor.userId(), function(){
  if(Meteor.userId()){
    user = Meteor.users.findOne(Meteor.userId());
    Session.set('forum_topic_id', user && user.profile && user.profile.currentTopic);
    setWallpaper();
  }
});


settingsId = null;
Meteor.subscribe('settings', function(){
  Session.set('settingsLoaded', true);
  configFile = Settings.find().fetch()[0];

  //console.log(configFile);

  Session.set('systemConfigs', configFile);
  Session.set('siteName', configFile.name);
  Session.set('landingImage', configFile.landingImage);
  Session.set('forum_topic_id', configFile.publicThread);

  settingsId = Session.get('systemConfigs')._id;

  displayForkMeBanner(Session.get('systemConfigs'));
});

Meteor.autorun(function(){
  Meteor.subscribe('posts', Session.get('forum_topic_id'));
});





forkMeBanner = null;
displayForkMeBanner = function(session){
  if(session.forkme){
    forkMeBanner = new ForkMe({
      user: 'awatson1978',
      repo: 'clinical-support-forum',
      ribbon: {
        color: 'orange',
        position: 'left'
      }
    });
  }
};
