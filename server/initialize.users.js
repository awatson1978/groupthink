
Meteor.startup(function () {
  if (Meteor.users.find().count() === 0) {
    console.info('no users in database!  adding some default users');

    var userId = null;

    // crate our administrator
    userId = Accounts.createUser({
      _id: 'sysadmin',
      username: 'sysadmin',
      password: 'sysadmin',
      role: 'Admin',
      email: 'sysadmin@test.org',
      profile: {
        name: 'System Administrator',
        avatar: '/images/icons/Default_User.jpg'
      }
    });
    console.info('Account created: ' + userId);


    // crate our administrator
    userId = Accounts.createUser({
      username: 'janedoe',
      password: 'janedoe',
      email: 'janedoe@test.org',
      profile: {
        name: 'Jane Doe',
        role: 'User',
        avatar: '/images/icons/Default_User.jpg'
      }
    });
    console.info('Account created: ' + userId);


    // crate our administrator
    userId = Accounts.createUser({
      username: 'johndoe',
      password: 'johndoe',
      email: 'johndoe@test.org',
      profile: {
        name: 'John Doe',
        role: 'User',
        avatar: '/images/icons/Default_User.jpg'
      }
    });
    console.info('Account created: ' + userId);

  }
});
