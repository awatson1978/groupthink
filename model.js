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