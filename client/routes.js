Router.map(function() {
    this.route('landingPage', {path: '/'});
    this.route('rulesPage', {path: '/rules'});
    this.route('welcomePage', {path: '/welcome'});
    this.route('mapPage', {path: '/map'});
    this.route('forumPage', {path: '/forum'});
    this.route('welcomePage', {path: '/articles'});
    this.route('profilePage', {path: '/profile'});

    this.route('postPage', {path: '/postArticle'});
    this.route('postInputPage', {path: '/post'});

    this.route('showPost', {
        path: '/posts/:_id',
        data: function() { return Posts.findOne(this.params._id); }
    });



});





