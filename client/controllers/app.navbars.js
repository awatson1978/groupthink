Template.navbarHeader.isLoggedIn = function(){
    if(Meteor.userId()){
        return true
    }else{
        return false;
    }
};