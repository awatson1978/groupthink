getPreferredTheme = function(){
    if(Meteor.user() && Meteor.user().profile.theme){
        if(Meteor.user().profile.theme == "pink"){
            return 'panel-danger';
            //return 'btn-danger';
        }else if(Meteor.user().profile.theme == "green"){
            return 'panel-success';
            //return 'btn-success';
        }else if(Meteor.user().profile.theme == "blue"){
            return 'panel-info';
        }else{
            return 'panel-default';
        }
    }else{
        return 'panel-default';
    }
}

getPreferredButtonTheme = function(){
    if(Meteor.user() && Meteor.user().profile.theme){
        if(Meteor.user().profile.theme == "pink"){
            return 'btn-danger';
        }else if(Meteor.user().profile.theme == "green"){
            return 'btn-success';
        }else if(Meteor.user().profile.theme == "blue"){
            return 'btn-info';
        }else{
            return 'btn-default';
        }
    }else{
        return 'btn-default';
    }
}