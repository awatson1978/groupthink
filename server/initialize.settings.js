
Meteor.startup(function () {
  if (Settings.find().count() === 0) {
    console.info('no settings in database!  creating a configuration file.');

    var configurationId = null;

    // crate our administrator
    configurationId = Settings.insert({
      keyword: 'sysadmin',
      name: 'GroupThink',
      logo: '',
      tagline: 'Forums for the 21st century...',
      installed: false,
      live: false,
      maintenance: false,
      forkme: true,
      theme: {
        cover: '',
        color: {
          primary: '#000000',
          secondary: '#ffffff'
        }
      }
    });
    console.info('Configuration file created: ' + configurationId);
  }
});
