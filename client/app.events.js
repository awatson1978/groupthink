

Meteor.startup(function(){
  Hooks.init();

  Hooks.onLoggedIn = function(){
    setWallpaper();
    console.log('onLoggedIn: ' + Meteor.userId());
  };
  Hooks.onLoggedOut = function(userId){
    removeWallpapers();
  };
  Hooks.onCreateUser = function(userId){

  };
  Hooks.onDeleteUser = function(userId){

  };
  Hooks.onLoseFocus = function(userId){

  };
  Hooks.onGainFocus = function(userId){

  };
  Hooks.onCloseSession = function(userId){

  };
});



