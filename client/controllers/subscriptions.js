// the subscription needs to be in an autosubscribe to detect the reactive Session variable
Meteor.autosubscribe(function(){
    //Meteor.subscribe('customerAccounts', Session.get('account_search_term'));
});