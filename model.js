Posts  = new Meteor.Collection("posts");

Posts.allow({
    insert: function(){
        return true;
    },
    update: function () {
        return true;
    },
    remove: function(){
        return true;
    }
});



ZipCodes  = new Meteor.Collection("zipcodes");

ZipCodes.allow({
    insert: function(){
        return true;
    },
    update: function () {
        return true;
    },
    remove: function(){
        return true;
    }
});



UsersDirectory =    new Meteor.Collection("usersDirectory");

UsersDirectory.allow({
    insert: function(){
        return true;
    },
    update: function () {
        return true;
    },
    remove: function(){
        return true;
    }
});


//Meteor.users.allow({
//    insert: function(userId, todo){
//        // TODO:  restrict adding of users to admins
//        return true;
//    },
//    update: function (userId, todos, fields, modifier) {
//        // TODO:  restrict updating of user to admins and self by default
//        // TODO:  restrict public updating to specific user profile items
//        // TODO:  modify following code from updating todo record to update user profile record
//        //
//        //        return _.all(todos, function (todo) {
//        //            var allowed = [
//        //                "emails",
//        //                "profile",
//        //                "profile.dropbox",
//        //                "username"
//        //            ];
//        //            if (_.difference(fields, allowed).length){
//        //                return false; // tried to write to forbidden field
//        //            }else{
//        //              return true;
//        //            }
//        //        });
//        return true;
//    },
//    remove: function(userId){
//        // TODO:  restrict removing of users to admins and self
//        return true;
//    }
//});
//
