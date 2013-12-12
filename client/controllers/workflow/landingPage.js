Template.landingPage.getUserCount = function(){
  var count = Meteor.users.find().count();
  return count;
};

Template.landingPage.events({
  'click #screenshotTileBlue, tap #screenshotTileBlue':function(){

    Session.set('overlay_image_path', $('#screenshotBlue').attr('src'));
    Session.set('show_reactive_overlay', true);
    Session.set('show_overlay_image', true);

  }
});

Session.setDefault('screenshotIndex', 0);
Meteor.startup(function () {
  var displayedScreenshotIndex = 0;
  Meteor.setInterval(function () {
    Session.set('screenshotIndex', displayedScreenshotIndex);
    if(displayedScreenshotIndex == 2){
      displayedScreenshotIndex = 0;
    }else{
      displayedScreenshotIndex++;
    }
  }, 3000);
});

Template.landingPage.getScreenshotPath = function(){
  switch(Session.get('screenshotIndex')){
    case 0:
      return "/images/landingPage/red-theme-example.png";
      break;
    case 1:
      return "/images/landingPage/green-theme-example.png";
      break;
    case 2:
      return "/images/landingPage/blue-theme-example.png";
      break;
  }

};