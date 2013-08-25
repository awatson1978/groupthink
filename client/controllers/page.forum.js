Template.forumPage.posts = function(){
    return Posts.find();
};

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
        Posts.insert({
            text: $('#editor').cleanHtml()
        });
        Router.go('/forum');
    },
    'click .cancel-post-btn': function(){
        Router.go('/forum');
    }
})



Template.postItem.events({
    'click .delete-btn': function(){
        Posts.remove(this._id);
    }
})









