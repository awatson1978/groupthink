Meteor.subscribe('usersDirectory');
Meteor.subscribe('userProfile', Meteor.userId());

Meteor.autorun(function(){
  Meteor.subscribe('posts', Session.get('forum_topic_id'));

});


settingsId = null;
Meteor.subscribe('settings', function(){
  Session.set('settingsLoaded',true);
  Session.set('systemConfigs', Settings.find().fetch()[0]);
  Session.set('siteName', Session.get('systemConfigs').name);
  settingsId = Session.get('systemConfigs')._id;

  displayForkMeBanner(Session.get('systemConfigs'));
});



forkMeBanner = null;
displayForkMeBanner = function(session){
  if(session.forkme){
    forkMeBanner = new ForkMe({
      user: 'awatson1978',
      repo: 'groupthink',
      ribbon: {
        color: 'orange',
        position: 'right'
      }
    });
  }
};



