

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


Meteor.startup(function () {
    if (Posts.find().count() === 0) {
        console.info('no users in database!  adding some default users');

        var postId = null;

        // crate our administrator
        postId = Posts.insert({
            creatorId: 'ada',
            topicId: 'ada',
            text: 'Lorem ipsum...',
            image: '',
            tags: []
        });
        console.info('postId: ' + postId);

        // crate our administrator
        postId = Posts.insert({
            creatorId: 'ada',
          topicId: 'ada',
            text: 'The quick brown fox...',
            image: '',
            tags: []
        });
        console.info('postId: ' + postId);


        // crate our administrator
        postId = Posts.insert({
            creatorId: 'ada',
          topicId: 'ada',
            text: 'A tisket a tasket...',
            image: '',
            tags: []
        });
        console.info('postId: ' + postId);

    }
});
