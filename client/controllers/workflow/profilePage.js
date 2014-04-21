Template.profilePage.isLoggedIn = function(){
  if(Meteor.userId()){
    return true
  }else{
    return false;
  }
};

Template.profilePage.events({
  'click #forgotPasswordButton, tap #forgotPasswordButton':function(){
    Router.go('/forgot-password');
  },


  'click .noThemeButton, tap .noThemeButton':function(){
    console.count('click .noThemeButton');
    Meteor.users.update(Meteor.userId(), {$set: {
      'profile.theme': 'none'
    }});
    removeWallpapers();
  },
  'click .pinkThemeButton, tap .pinkThemeButton':function(){
    console.count('click .pinkThemeButton');
    Meteor.users.update(Meteor.userId(), {$set: {
      'profile.theme': 'pink',
      'profile.wallpaper': 'pinkWallpaper'
    }});
    removeWallpapers();
    $('html').addClass('pinkWallpaper');
  },
  'click .greenThemeButton, tap .greenThemeButton':function(){
    console.count('click .greenThemeButton');
    Meteor.users.update(Meteor.userId(), {$set: {
      'profile.theme':'green',
      'profile.wallpaper':'greenWallpaper'
    }});
    removeWallpapers();
    $('html').addClass('greenWallpaper');
  },
  'click .blueThemeButton, tap .blueThemeButton':function(){
    console.count('click .blueThemeButton');
    Meteor.users.update(Meteor.userId(), {$set: {
      'profile.theme': 'blue',
      'profile.wallpaper': 'blueWallpaper'
    }});
    removeWallpapers();
    $('html').addClass('blueWallpaper');
  },
  'click .saveButton, tap .saveButton':function(){
    console.count('click .saveButton');
    Meteor.users.update(Meteor.userId(), {$set: {
      'profile.avatar': $('#userProfileAvatarInput').val(),
      'profile.username': $('#userProfileUsername').val()
    }});
  },


  'click .noWallpaper, tap .noWallpaper':function(){
    console.count('click .noWallpaper');

    removeWallpapers();
    Meteor.users.update(Meteor.userId(), {$set: {
      'profile.wallpaper': 'noWallpaper'
    }});
    $('html').addClass('noWallpaper');
  },
  'click .pinkWallpaper, tap .pinkWallpaper':function(){
    console.count('click .pinkWallpaper');

    removeWallpapers();
    Meteor.users.update(Meteor.userId(), {$set: {
      'profile.wallpaper': 'pinkWallpaper'
    }});
    $('html').addClass('pinkWallpaper');
  },
  'click .greenWallpaper, tap .greenWallpaper':function(){
    console.count('click .greenWallpaper');

    removeWallpapers();
    Meteor.users.update(Meteor.userId(), {$set: {
      'profile.wallpaper': 'greenWallpaper'
    }});
    $('html').addClass('greenWallpaper');
  },
  'click .blueWallpaper, tap .blueWallpaper':function(){
    console.count('click .blueWallpaper');

    removeWallpapers();
    Meteor.users.update(Meteor.userId(), {$set: {
      'profile.wallpaper': 'blueWallpaper'
    }});
    $('html').addClass('blueWallpaper');
  },
  'click .rainbowWallpaper, tap .rainbowWallpaper':function(){
    console.count('click .rainbowWallpaper');

    removeWallpapers();
    Meteor.users.update(Meteor.userId(), {$set: {
      'profile.wallpaper': 'rainbowWallpaper'
    }});
    $('html').addClass('rainbowWallpaper');
  },


  'click #girlOneAvatarButton, tap #girlOneAvatarButton': function(){
    Meteor.users.update(Meteor.userId(), {$set: {'profile.avatar': '/images/icons/Default_Female_1.png'}});
  },
  'click #girlTwoAvatarButton, tap #girlTwoAvatarButton': function(){
    Meteor.users.update(Meteor.userId(), {$set: {'profile.avatar': '/images/icons/Default_Female_2.png'}});
  },
  'click #defaultUserAvatarButton, tap #defaultUserAvatarButton': function(){
    Meteor.users.update(Meteor.userId(), {$set: {'profile.avatar': '/images/icons/Default_User.png'}});
  },
  'click #boyTwoAvatarButton, tap #boyTwoAvatarButton': function(){
    Meteor.users.update(Meteor.userId(), {$set: {'profile.avatar': '/images/icons/Default_Male_2.png'}});
  },
  'click #boyOneAvatarButton, tap #boyOneAvatarButton': function(){
    Meteor.users.update(Meteor.userId(), {$set: {'profile.avatar': '/images/icons/Default_Male_1.png'}});
  },



  'keyup #userProfileBackgroundInput': function(){
    removeWallpapers();
    Meteor.users.update(Meteor.userId(), {$set: {
      'profile.wallpaper': $('#userProfileBackgroundInput').val()
    }});
    $('html').addClass('pinkWallpaper');
    Session.set('userProfileBackgroundImage', $('#userProfileBackgroundInput').val());
  },
  'change #userProfileAvatarInput': function(){
    Session.set('userProfileAvatarInput', $('#userProfileAvatarInput').val());
    Meteor.users.update(Meteor.userId(), {$set: {'profile.avatar': Session.get('userProfileAvatarInput') }});
  }
});

Template.mainLayout.customBackgroundImage = function(){
  return Session.get('userProfileBackgroundImage');
};


Template.profilePage.getAvatarImage = function(){
  console.log('Template.profilePage.getAvatarImage');
  console.log(Meteor.user());
  if(Meteor.userId()){
    if(Meteor.user().profile){
      if(Meteor.user().profile.avatar != ""){
        var img = new Image();
        img.src = Meteor.user().profile.avatar;
        console.log('image ratio: ' + img.width/img);
        if(img.width = img.height){
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
Template.profilePage.getWallpaperPreference = function(){
  if(Meteor.user() && Meteor.user().profile.wallpaper){
    return Meteor.user().profile.wallpaper;
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
