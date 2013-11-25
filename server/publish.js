Meteor.publish('topics', function(){
  try{
    return Topics.find();
  }catch(error){
    console.log(error);
  }
});
Meteor.publish('posts', function (forum_topic_id ) {
  try{
    return Posts.find({topicId: forum_topic_id});

//        return Dictionary.find({
//            Word: { $regex: '^' + dictionary_search, $options: 'i' },
//            Status: { $regex: '^' + status_search, $options: 'i' }
//        },{limit: 20, sort:{ Word: 1}});
  }catch(error){
    console.log(error);
  }
});


Meteor.publish('userProfile', function (userId) {
  try{
    return Meteor.users.find({_id: this.userId}, {fields: {
      '_id': true,
      'username': true,
      'role': true,
      'profile': true,
      'profile.name': true,
      'profile.avatar': true,
      'profile.username': true,

      'emails': true,
      'emails[0].address': true
    }});

  }catch(error){
    console.log(error);
  }
});

// Publish users directory and user profile
Meteor.publish("usersDirectory", function () {
  try{
    return Meteor.users.find({}, {fields: {
      '_id': true,
      'username': true,
      'profile': true,
      'profile.name': true,
      'profile.avatar': true,
      'profile.username': true,

      'emails': true,
      'emails[0].address': true,
      'emails.address': true
    }});
  }catch(error){
    console.log(error);
  }
});


// Publish users directory and user profile
Meteor.publish("system", function () {
  try{
    return Meteor.users.find({username: 'sysadmin'}, {fields: {
      '_id': true,
      'username': true,
      'profile': true,
      'profile.name': true,
      'profile.avatar': true,
      'profile.username': true,

      'configuration': true,
      'configuration.name': true,
      'configuration.logo': true,
      'configuration.tagline': true,
      'configuration.installed': true,
      'configuration.live': true,
      'configuration.maintenance': true,
      'configuration.theme': true,
      'configuration.theme.cover': true,
      'configuration.theme.color': true,
      'configuration.theme.color.primary': true,
      'configuration.theme.color.secondary': true
    }});
  }catch(error){
    console.log(error);
  }
});

// Publish site settings
Meteor.publish("settings", function () {
  try{
    return Settings.find({keyword: 'sysadmin'}, {fields: {
      'name': true,
      'logo': true,
      'tagline': true,
      'installed': true,
      'live': true,
      'maintenance': true,
      'forkme': true,
      'theme': true,
      'theme.cover': true,
      'theme.color': true,
      'theme.color.primary': true,
      'theme.color.secondary': true
    }});
  }catch(error){
    console.log(error);
  }
});