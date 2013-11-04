Session.setDefault('user_intent', 'newpost');

Template.postInputPage.isNewTopic = function(){
    if(Session.get('user_intent') == 'newtopic'){
        return true;
    }else{
        return false;
    }
};
Template.postInputPage.rendered = function(){
    $('#editor').wysiwyg();
};

Template.postInputPage.events({
    'click .create-post-btn':function(){
        console.count('click .create-post-btn');
        console.log('Meteor.userId(): ' + Meteor.userId());
        console.log(Meteor.user());
        console.log('Meteor.user().profile.username: ' + Meteor.user().profile.username);

        var topicId = Topics.insert({
            topic: $('#topicInput').val()
        });
        Posts.insert({
            creatorName: Meteor.user().profile.username,
            text: $('#editor').cleanHtml(),
            image: $('#imageInput').val(),
            weblink: $('#weblinkInput').val(),
            creatorId: Meteor.userId(),
            topicId: topicId
        });
        Router.go('/forum');
    },
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
            creatorId: Meteor.userId(),
            topicId: Session.get('forum_topic_id')
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