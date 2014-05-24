getPreferredTheme = function(){
    var user = Meteor.user();
    if(user && user.profile && user.profile.theme){
        if(user.profile.theme == "pink"){
            return 'panel-danger';
            //return 'btn-danger';
        }else if(user.profile.theme == "green"){
            return 'panel-success';
            //return 'btn-success';
        }else if(user.profile.theme == "blue"){
            return 'panel-info';
        }else{
            return 'panel-default';
        }
    }else{
        return 'panel-default';
    }
}

getPreferredButtonTheme = function(){
    var user = Meteor.user();
    if(user && user.profile && user.profile.theme){
        if(user.profile.theme == "pink"){
            return 'btn-danger';
        }else if(user.profile.theme == "green"){
            return 'btn-success';
        }else if(user.profile.theme == "blue"){
            return 'btn-info';
        }else{
            return 'btn-default';
        }
    }else{
        return 'btn-default';
    }
}