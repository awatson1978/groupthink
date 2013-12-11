AccountsEntry = {
  settings: {
    wrapLinks: true,
    homeRoute: 'home',
    dashboardRoute: 'dashboard'
  },
  config: function(appConfig) {
    return this.settings = _.extend(this.settings, appConfig);
  }
};

this.AccountsEntry = AccountsEntry;