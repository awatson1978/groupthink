

Meteor.publish('topics', function(){
    try{
        return Topics.find();
    }catch(error){
        console.log(error);
    }
});



Meteor.startup(function () {
    if (Topics.find().count() === 0) {
        console.info('no topics in database!  adding some default users');
        var topicId = null;

        // crate our administrator
        topicId = Topics.insert({
            topic: 'Sample topic on nothing'
        });
        console.info('topicId: ' + topicId);
    }
});
