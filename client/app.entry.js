Meteor.startup(function() {
  Accounts.ui.config({
    passwordSignupFields: 'EMAIL_ONLY'
  });
  return AccountsEntry.config({
    privacyUrl: '/privacy-policy',
    termsUrl: '/terms-of-use',
    homeRoute: '/',
    dashboardRoute: '/forum',
    profileRoute: '/profile',
    showSignupCode: false
  });
});