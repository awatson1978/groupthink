Meteor.subscribe('topics');
Meteor.subscribe('zipcodes');

Meteor.subscribe('usersDirectory');
Meteor.subscribe('userProfile', Meteor.userId());

Meteor.autorun(function(){
    Meteor.subscribe('posts', Session.get('forum_topic_id'));
});