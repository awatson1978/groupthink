Template.forumPage.getPreferredProfileTheme = function(){
    return getPreferredTheme();
};
Template.forumPage.getPreferredButtonTheme = function(){
    return getPreferredButtonTheme();
};

Template.forumPage.posts = function(){
    return Posts.find();
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
    if(this.topic){
        return this.topic;
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