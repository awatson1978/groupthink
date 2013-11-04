Template.topicsPage.getPreferredProfileTheme = function(){
    return getPreferredTheme();
};
Template.topicsPage.getPreferredButtonTheme = function(){
    return getPreferredButtonTheme();
};

//Template.topicsPage.addTopicIsVisible = function(){
//    return Session.get('is_add_topic_visible');
//}

Template.topicsPage.topics = function(){
    return Topics.find();
}

Session.setDefault('is_add_topic_visible', false);
Template.topicsPage.events({
    'click #createTopicButton': function(){
        Session.set('user_intent', 'newtopic');
        Router.go('/post');
    }
})

Template.topicsPage.events({
    'click .list-group-item':function(){
        Session.set('forum_topic_id', this._id);
        Session.set('forum_topic', this.topic);
        Router.go('/forum');
    }
})

//toggleSession = function(variable){
//    if(Session.get(variable)){
//        Session.set(variable, false);
//    }else{
//        Session.set(variable, true);
//    }
//}