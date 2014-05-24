Template.usersListPage.usersList = function(){
  return Meteor.users.find();
};
Template.userListItem.getEmail = function(){
  if(this.emails){
    return this.emails[0].address;
  }else{
    return '';
  }
}
