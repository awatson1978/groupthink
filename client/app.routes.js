Router.map(function() {
    this.route('landingRoute', {path: '/', template: 'landingPage'});
    this.route('rulesRoute', {path: '/rules', template: 'rulesPage'});

    this.route('topicsRoute', {path: '/topics', template:'topicsPage'});
    this.route('forumRoute', {path: '/forum', template:'forumPage'});

    this.route('profileRoute', {path: '/profile', template:'profilePage'});
    this.route('postInputRoute', {path: '/post', template:'postInputPage'});

    this.route('postInputRoute', {
        path: '/posts/:_id',
        data: function() { return Posts.findOne(this.params._id); },
        template: 'postInputPage'
    });

});






