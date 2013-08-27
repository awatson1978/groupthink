Meteor.subscribe('posts');
Meteor.subscribe('zipcodes');

Meteor.subscribe('usersDirectory');
Meteor.subscribe('userProfile', Meteor.userId());