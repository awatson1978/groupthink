// if the database is empty on server start, create some sample data.
// we create a separate bootstrap.users.js file
// because we'll be wanting to set up a number of patient-scenario test users

Meteor.publish('posts', function(){
    try{
        return Posts.find();
    }catch(error){
        console.log(error);
    }
});



Meteor.startup(function () {
    if (Posts.find().count() === 0) {
        console.info('no users in database!  adding some default users');

        var postId = null;

        // crate our administrator
        postId = Posts.insert({
            creatorId: 'ada',
            threadId: 'ada',
            text: 'Lorem ipsum...',
            image: '',
            tags: []
        });
        console.info('postId: ' + postId);

        // crate our administrator
        postId = Posts.insert({
            creatorId: 'ada',
            threadId: 'ada',
            text: 'The quick brown fox...',
            image: '',
            tags: []
        });
        console.info('postId: ' + postId);


        // crate our administrator
        postId = Posts.insert({
            creatorId: 'ada',
            threadId: 'ada',
            text: 'A tisket a tasket...',
            image: '',
            tags: []
        });
        console.info('postId: ' + postId);

    }
});
