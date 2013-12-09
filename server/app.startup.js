Meteor.startup(function(){
  crypto = Npm.require('crypto');
});

Meteor.methods({
  getSystemConfiguration: function(){
    console.log('getSystemConfiguration...');
    var systemAccount = Meteor.users.findOne({username: 'sysadmin'});
    console.log('-----------------------');
    console.log(systemAccount);
    console.log('-----------------------');
    console.log(systemAccount.configuration);
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
    return systemAccount.configuration;
  }
});