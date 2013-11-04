Session.setDefault('topic_search', '');
Session.setDefault('person_search', '');
Session.setDefault('tags_search', '');
Session.setDefault('excluded_topic', '');
Session.setDefault('excluded_tags', '');

Session.setDefault('forum_topic_id', '');
Session.setDefault('forum_topic', '');


Template.forumPage.getPreferredProfileTheme = function(){
    return getPreferredTheme();
};
Template.forumPage.getPreferredButtonTheme = function(){
    return getPreferredButtonTheme();
};

Template.forumPage.posts = function(){
    return Posts.find();
};
Template.forumPage.getForumTopic = function(){
    return Session.get('forum_topic');
};
Template.forumPage.getForumTopicId = function(){
    return Session.get('forum_topic_id');
};

Template.postItem.events({
    'click .delete-btn': function(){
        Posts.remove(this._id);
    },
    'click .edit-btn': function(){
        //alert('edit! ' + this._id);
        Router.go('/posts/' + this._id);
    },
    'click .downvote-btn': function(){
        alert('downvote! ' + this._id);
    },
    'click .upvote-btn': function(){
        alert('upvote! ' + this._id);
    }
})





Template.postItem.getTopic = function(){
    if(this.topicId){
        return Topics.findOne(this.topicId).topic;
    }else{
        return '...';
    }
};


Template.postItem.getWebsite = function(){
    if(this.weblink){
        return this.weblink;
    }else{
        return '';
    }
};

Template.postItem.getPostAvatar = function(){
    if(Meteor.users.findOne(this.creatorId)){
        var user = Meteor.users.findOne(this.creatorId);
        return user.profile.avatar;
    }else{
        return '';
    }
};