Template.postInputPage.rendered = function(){

    $('#editor').wysiwyg();
//    $(template.find('#textArea.editable:not(.editable-click)')).editable('destroy').editable({
//        success: function(response, newValue) {
//            Post.insert({
//                text: newValue
//            });
//        //<do something with newValue - usually a collection.update call>
//    }});
};

Template.postInputPage.events({
    'click .submit-post-btn':function(){
        console.count('click .submit-post-btn');
        console.log('Meteor.userId(): ' + Meteor.userId());
        console.log(Meteor.user());

        console.log('Meteor.user().profile.username: ' + Meteor.user().profile.username);
        Posts.insert({
            creatorName: Meteor.user().profile.username,
            text: $('#editor').cleanHtml(),
            image: $('#imageInput').val(),
            weblink: $('#weblinkInput').val(),
            creatorId: Meteor.userId()
        });




        Router.go('/forum');
    },
    'click .update-post-btn':function(){
        console.count('click .update-post-btn');
        console.log('Meteor.userId(): ' + Meteor.userId());
        console.log(Meteor.user());

        console.log('Meteor.user().profile.username: ' + Meteor.user().profile.username);
        Posts.update(this._id,{$set: {
            creatorName: Meteor.user().profile.username,
            text: $('#editor').cleanHtml(),
            image: $('#imageInput').val(),
            weblink: $('#weblinkInput').val(),
            creatorId: Meteor.userId()
        }});

        Router.go('/forum');
    },
    'click .cancel-post-btn': function(){
        Router.go('/forum');
    }
})


Template.postInputPage.getPreferredProfileTheme = function(){
    return getPreferredTheme();
};
Template.postInputPage.getPreferredButtonTheme = function(){
    return getPreferredButtonTheme();
};