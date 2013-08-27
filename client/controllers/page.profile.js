Template.profilePage.isLoggedIn = function(){
    if(Meteor.userId()){
        return true
    }else{
        return false;
    }
};

Template.profilePage.events({
    'click .noThemeButton':function(){
        console.count('click .noThemeButton');
        Meteor.users.update(Meteor.userId(), {$set: {
            'profile.theme': 'none'
        }});
    },
    'click .pinkThemeButton':function(){
        console.count('click .pinkThemeButton');
        Meteor.users.update(Meteor.userId(), {$set: {
            'profile.theme': 'pink'
        }});
    },
    'click .greenThemeButton':function(){
        console.count('click .greenThemeButton');
        Meteor.users.update(Meteor.userId(), {$set: {
            'profile.theme':'green'
        }});
    },
    'click .blueThemeButton':function(){
        console.count('click .blueThemeButton');
        Meteor.users.update(Meteor.userId(), {$set: {
            'profile.theme': 'blue'
        }});
    },
    'click .saveButton':function(){
        console.count('click .saveButton');
        Meteor.users.update(Meteor.userId(), {$set: {
            'profile.avatar': $('#userProfileAvatarInput').val(),
            'profile.username': $('#userProfileUsername').val()
        }});
    },


    'click .noWallpaper':function(){
        console.count('click .noWallpaper');

        removeWallpapers();
        $('html').addClass('noWallpaper');

//        Meteor.users.update(Meteor.userId(), {$set: {
//            'profile.avatar': $('#userProfileAvatarInput').val(),
//            'profile.username': $('#userProfileUsername').val()
//        }});
    },
    'click .pinkWallpaper':function(){
        console.count('click .pinkWallpaper');

        removeWallpapers();
        $('html').addClass('pinkWallpaper');

//        Meteor.users.update(Meteor.userId(), {$set: {
//            'profile.avatar': $('#userProfileAvatarInput').val(),
//            'profile.username': $('#userProfileUsername').val()
//        }});
    },
    'click .greenWallpaper':function(){
        console.count('click .greenWallpaper');

        removeWallpapers();
        $('html').addClass('greenWallpaper');

//        Meteor.users.update(Meteor.userId(), {$set: {
//            'profile.avatar': $('#userProfileAvatarInput').val(),
//            'profile.username': $('#userProfileUsername').val()
//        }});
    },
    'click .blueWallpaper':function(){
        console.count('click .blueWallpaper');

        removeWallpapers();
        $('html').addClass('blueWallpaper');

//        Meteor.users.update(Meteor.userId(), {$set: {
//            'profile.avatar': $('#userProfileAvatarInput').val(),
//            'profile.username': $('#userProfileUsername').val()
//        }});
    },
    'click .rainbowWallpaper':function(){
        console.count('click .rainbowWallpaper');

        removeWallpapers();
        $('html').addClass('rainbowWallpaper');

//        Meteor.users.update(Meteor.userId(), {$set: {
//            'profile.avatar': $('#userProfileAvatarInput').val(),
//            'profile.username': $('#userProfileUsername').val()
//        }});
    }



});

removeWallpapers = function(){
    $('html').removeClass('noWallpaper');
    $('html').removeClass('greenWallpaper');
    $('html').removeClass('pinkWallpaper');
    $('html').removeClass('blueWallpaper');
    $('html').removeClass('rainbowWallpaper');
}

Template.profilePage.getAvatarImage = function(){
    console.log('Template.profilePage.getAvatarImage');
    console.log(Meteor.user());
    if(Meteor.user()){
        if(Meteor.user().profile){
            if(Meteor.user().profile.avatar != ""){
                return '<img class="profile-avatar with-vertical-padding" src="' + Meteor.user().profile.avatar + '">';
            }else{
                return '<img class="profile-avatar with-vertical-padding" src="placeholder-512x512.jpg">';
            }
        }else{
            return '<img class="profile-avatar with-vertical-padding" src="placeholder-512x512.jpg">';
        }
    }else{
        return '<img class="profile-avatar with-vertical-padding" src="placeholder-512x512.jpg">';
    }
};

Template.profilePage.getEmail = function(){
    console.log('Template.profilePage.getEmail');
    console.log(Meteor.user());
    if(Meteor.user()){
        return Meteor.user().emails[0].address;
    }else{
        return 'not logged in';
    }
};
Template.profilePage.getUsername = function(){
    console.log('Template.profilePage.getEmail');
    console.log(Meteor.user());
    if(Meteor.user()){
        return Meteor.user().profile.username;
    }else{
        return 'no username specified';
    }
};

Template.profilePage.getAvatarUrl = function(){
    if(Meteor.user()){
        return Meteor.user().profile.avatar;
    }else{
        return 'no username specified';
    }
};
Template.profilePage.getThemePreference = function(){
    if(Meteor.user() && Meteor.user().profile.theme){
        return Meteor.user().profile.theme;
    }else{
        return 'none';
    }
};
Template.profilePage.getSortPreference = function(){
    if(Meteor.user() && Meteor.user().profile.sort){
        return Meteor.user().profile.sort;
    }else{
        return 'none';
    }
};

Template.profilePage.getPreferredProfileTheme = function(){
    return getPreferredTheme();
};

Template.profilePage.getTriggers = function(){
    if(Meteor.user() && Meteor.user().profile.triggers){
        return Meteor.user().profile.triggers;
    }else{
        return '';
    }
};
Template.profilePage.getIgnoreList = function(){
    if(Meteor.user() && Meteor.user().profile.ignorelist){
        return Meteor.user().profile.ignorelist;
    }else{
        return '';
    }
};