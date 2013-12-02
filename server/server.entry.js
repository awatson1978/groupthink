Meteor.methods({
  entryValidateSignupCode:function(signupCode){
    return true;
  },
  accountsCreateUser: function(username, email, password){
    Accounts.createUser(username, email, password);
    return true;
  }
});