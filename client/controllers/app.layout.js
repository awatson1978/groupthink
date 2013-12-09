Meteor.startup(function(){
  if(Meteor.userId()){
    if(Meteor.user().profile && Meteor.user().profile.wallpaper){
      $('html').addClass(Meteor.user().profile.wallpaper);
    }
  }else{
    removeWallpapers();
  }
});

//Session.setDefault('wallpaper', 'notparsed');
//Template.profilePage.time = function(){
//  if(Session.get('wallpaper') === 'notparsed'){
//    if(Meteor.userId()){
//      if(Meteor.userId().profile && Meteor.userId().profile.wallpaper){
//        $('html').addClass(Meteor.userId().profile.wallpaper);
//        Session.set('wallpaper', Meteor.userId().profile.wallpaper);
//      }
//    }else{
//      removeWallpapers();
//    }
//  }
//  return new Date();
//};

removeWallpapers = function(){
  $('html').removeClass('noWallpaper');
  $('html').removeClass('greenWallpaper');
  $('html').removeClass('pinkWallpaper');
  $('html').removeClass('blueWallpaper');
  $('html').removeClass('rainbowWallpaper');
};




