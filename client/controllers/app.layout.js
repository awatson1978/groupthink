Session.setDefault('wallpaper', 'notparsed');
Template.profilePage.time = function(){
  if(Session.get('wallpaper') == 'notparsed'){
    if(Meteor.userId()){
      //removeWallpapers();
      if(Meteor.userId().profile && eteor.userId().profile.wallpaper){
        $('html').addClass(Meteor.userId().profile.wallpaper);
        Session.set('wallpaper', Meteor.userId().profile.wallpaper);
      }
    }
  }
  return new Date();
};

removeWallpapers = function(){
  $('html').removeClass('noWallpaper');
  $('html').removeClass('greenWallpaper');
  $('html').removeClass('pinkWallpaper');
  $('html').removeClass('blueWallpaper');
  $('html').removeClass('rainbowWallpaper');
};
