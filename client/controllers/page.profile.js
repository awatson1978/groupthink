Template.profilePage.isLoggedIn = function(){
  if(Meteor.userId()){
    return true
  }else{
    return false;
  }
};

Template.profilePage.events({
  'click #forgotPasswordButton':function(){
    Router.go('/forgot-password');
  },
  'click .noThemeButton':function(){
    console.count('click .noThemeButton');
    Meteor.users.update(Meteor.userId(), {$set: {
      'profile.theme': 'none'
    }});
    removeWallpapers();
  },
  'click .pinkThemeButton':function(){
    console.count('click .pinkThemeButton');
    Meteor.users.update(Meteor.userId(), {$set: {
      'profile.theme': 'pink',
      'profile.wallpaper': 'pinkWallpaper'
    }});
    removeWallpapers();
    $('html').addClass('pinkWallpaper');
  },
  'click .greenThemeButton':function(){
    console.count('click .greenThemeButton');
    Meteor.users.update(Meteor.userId(), {$set: {
      'profile.theme':'green',
      'profile.wallpaper':'greenWallpaper'
    }});
    removeWallpapers();
    $('html').addClass('greenWallpaper');
  },
  'click .blueThemeButton':function(){
    console.count('click .blueThemeButton');
    Meteor.users.update(Meteor.userId(), {$set: {
      'profile.theme': 'blue',
      'profile.wallpaper': 'blueWallpaper'
    }});
    removeWallpapers();
    $('html').addClass('blueWallpaper');
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
    Meteor.users.update(Meteor.userId(), {$set: {
      'profile.wallpaper': 'noWallpaper'
    }});
    $('html').addClass('noWallpaper');
  },
  'click .pinkWallpaper':function(){
    console.count('click .pinkWallpaper');

    removeWallpapers();
    Meteor.users.update(Meteor.userId(), {$set: {
      'profile.wallpaper': 'pinkWallpaper'
    }});
    $('html').addClass('pinkWallpaper');
  },
  'click .greenWallpaper':function(){
    console.count('click .greenWallpaper');

    removeWallpapers();
    Meteor.users.update(Meteor.userId(), {$set: {
      'profile.wallpaper': 'greenWallpaper'
    }});
    $('html').addClass('greenWallpaper');
  },
  'click .blueWallpaper':function(){
    console.count('click .blueWallpaper');

    removeWallpapers();
    Meteor.users.update(Meteor.userId(), {$set: {
      'profile.wallpaper': 'blueWallpaper'
    }});
    $('html').addClass('blueWallpaper');
  },
  'click .rainbowWallpaper':function(){
    console.count('click .rainbowWallpaper');

    removeWallpapers();
    Meteor.users.update(Meteor.userId(), {$set: {
      'profile.wallpaper': 'rainbowWallpaper'
    }});
    $('html').addClass('rainbowWallpaper');
  }
});


Template.profilePage.getAvatarImage = function(){
  console.log('Template.profilePage.getAvatarImage');
  console.log(Meteor.user());
  if(Meteor.userId()){
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