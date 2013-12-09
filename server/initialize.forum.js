sysadminId = null;
janedoeId = null;
johndoeId = null;
topicId = null;

Meteor.startup(function () {
  if (Meteor.users.find().count() === 0) {
    console.info('no users in database!  adding some default users');

    // crate our administrator
    sysadminId = Accounts.createUser({
      _id: 'sysadmin',
      username: 'sysadmin',
      password: 'sysadmin',
      role: 'Admin',
      email: 'sysadmin@test.org',
      profile: {
        name: 'System Administrator',
        avatar: '/images/icons/Default_User.png'
      }
    });
    console.info('Account created: ' + sysadminId);

    // crate our administrator
    janedoeId = Accounts.createUser({
      username: 'janedoe',
      password: 'janedoe',
      role: 'User',
      email: 'janedoe@test.org',
      profile: {
        name: 'Jane Doe',
        avatar: '/images/icons/Default_Female_2.png'
      }
    });
    console.info('Account created: ' + janedoeId);


    // crate our administrator
    johndoeId = Accounts.createUser({
      username: 'johndoe',
      password: 'johndoe',
      email: 'johndoe@test.org',
      role: 'User',
      profile: {
        name: 'John Doe',
        avatar: '/images/icons/Default_Male_2.png'
      }
    });
    console.info('Account created: ' + johndoeId);
  }

  if (Topics.find().count() === 0) {
    console.info('no topics in database!  adding some default users');

    // crate our administrator
    topicId = Topics.insert({
      topic: 'Welcome to your new GroupThink Forum.',
      creatorId: sysadminId,
      createdBy: 'The Dev Team',
      cratedAt: new Date(),
      replies: 3,
      views: 0,
      locked: false,
      lastPostId: johndoeId,
      lastPostBy: 'The Dev Team',
      lastPostAt: new Date()
    });
    console.info('topicId: ' + topicId);
  }

  if (Posts.find().count() === 0) {
    console.info('no users in database!  adding some default users');

    var postId = null;

    // crate our administrator
    postId = Posts.insert({
      creatorId: janedoeId,
      createdBy: 'Jane Doe',
      createdAt: new Date(),
      topicId: topicId,
      text: 'Lorem ipsum...',
      image: '',
      tags: ['welcome', 'intro']
    });
    console.info('postId: ' + postId);

    // crate our administrator
    postId = Posts.insert({
      creatorId: johndoeId,
      createdBy: 'John Doe',
      createdAt: new Date(),
      topicId: topicId,
      text: 'The quick brown fox...',
      image: '',
      tags: ['interesting', 'informative']
    });
    console.info('postId: ' + postId);


    // crate our administrator
    postId = Posts.insert({
      creatorId: janedoeId,
      createdBy: 'Jane Doe',
      createdAt: new Date(),
      topicId: topicId,
      text: 'A tisket, a tasket...',
      image: '',
      tags: ['vulgar', 'inflamatory' ]
    });
    console.info('postId: ' + postId);

  }
});
