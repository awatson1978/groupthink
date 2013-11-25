Session.setDefault('site_name', 'Custom Forum Name');
Template.adminPage.siteNameInput = function(){
  if(Session.get('systemConfigs')){
    return Session.get('systemConfigs').name;
  }else{
    return '---';
  }
}

Template.adminPage.events({
  'keyup #siteNameInput':function(){
    Session.set('siteName', $('#siteNameInput').val());
    Settings.update(settingsId, {$set: {name: Session.get('siteName') }})
    Meteor.flush();
  },
  'click #forkMeButton':function(){
    var currentForkMeValue = Settings.findOne(settingsId).forkme;
    if(currentForkMeValue){
      Settings.update(settingsId, {$set: {forkme: false }});
      $('#forkMeBanner').remove();
    }else{
      Settings.update(settingsId, {$set: {forkme: true }});
      displayForkMeBanner(Session.get('systemConfigs'));
    }
    Meteor.flush();
  }
});

Template.adminPage.usersList = function(){
  return Meteor.users.find();
};



Template.adminPage.getForkMeColor = function(){
  if(settingsId){
    if(Settings.findOne(settingsId).forkme){
      return "btn-warning";
    }else{
      return 'btn-default';
    }
  }else{
    return '';
  }
};
Template.adminPage.getForkMeText = function(){
  if(settingsId){
    if(Settings.findOne(settingsId).forkme){
      return "ForkMe Visible";
    }else{
      return 'ForkMe Hidden';
    }
  }else{
    return '---';
  }
};