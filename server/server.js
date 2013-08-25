Meteor.startup(function () {
    // code to run on server at startup
    Meteor.publish('posts', function(){
        try{
            return Posts.find();
        }catch(error){
            console.log(error);
        }
    });
});





