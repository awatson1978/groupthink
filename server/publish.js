Meteor.publish('userProfile', function (userId) {
    try{
        return Meteor.users.find({_id: this.userId}, {fields: {
            '_id': true,
            'username': true,
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