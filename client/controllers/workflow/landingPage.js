Template.landingPage.getUserCount = function(){
  var count = Meteor.users.find().count();
  return count;
};

Template.landingPage.events({
  'click #screenshotTileBlue, tap #screenshotTileBlue':function(){

    Session.set('overlay_image_path', $('#screenshotBlue').attr('src'));
    Session.set('show_reactive_overlay', true);
    Session.set('show_overlay_image', true);

//    if(Session.get('show_reactive_overlay')){
//      Session.set('show_reactive_overlay', false);
//    }else{
//      Session.set('show_reactive_overlay', true);
//    }
  }
});
