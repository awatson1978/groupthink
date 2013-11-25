Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});

Meteor.startup(function() {
  return AccountsEntry.config({
    privacyUrl: '/privacy-policy',
    termsUrl: '/terms-of-use',
    homeRoute: '/',
    dashboardRoute: '/topics',
    profileRoute: '/profile',
    showSignupCode: false
  });
});