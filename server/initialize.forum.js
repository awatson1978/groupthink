sysadminId = null;
janedoeId = null;
johndoeId = null;
maryId = null;
wintermuteId = null;
snowflakeId = null;
topicId = null;

Meteor.startup(function () {
  if (Meteor.users.find().count() === 0) {
    console.info('no users in database!  adding some default users');


    //===============================================================================
    //===============================================================================
    // USERS

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
        avatar: '/images/sampleUsers/janedoe.jpg'
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
        avatar: '/images/sampleUsers/johndoe.jpg'
      }
    });
    console.info('Account created: ' + johndoeId);

    // crate our administrator
    maryId = Accounts.createUser({
      username: 'mary',
      password: 'mary',
      role: 'User',
      email: 'mary@test.org',
      profile: {
        name: 'Mary',
        avatar: '/images/sampleUsers/mary.jpg'
      }
    });
    console.info('Account created: ' + maryId);


    // crate our administrator
    snowflakeId = Accounts.createUser({
      username: 'snowflake',
      password: 'snowflake',
      email: 'snowflake@test.org',
      role: 'User',
      profile: {
        name: 'Snowflake',
        avatar: '/images/sampleUsers/snowflake.jpg'
      }
    });
    console.info('Account created: ' + snowflakeId);

    // crate our administrator
    wintermuteId = Accounts.createUser({
      username: 'wintermute',
      password: 'wintermute',
      email: 'wintermute@test.org',
      role: 'User',
      profile: {
        name: 'wintermute',
        avatar: '/images/sampleUsers/wintermute.jpg'
      }
    });
    console.info('Account created: ' + wintermuteId);
  }


//===============================================================================
//===============================================================================
// TOPICS

  if (Topics.find().count() === 0) {
    console.info('no topics in database!  adding some default users');

    // crate our administrator
    topicId = Topics.insert({
      topic: 'Welcome to your new GroupThink Forum.',
      creatorId: sysadminId,
      createdBy: 'The Dev Team',
      cratedAt: new Date(),
      replies: 0,
      views: 0,
      locked: false,
      lastPostId: johndoeId,
      lastPostBy: 'The Dev Team',
      lastPostAt: new Date()
    });
    console.info('topicId: ' + topicId);
  }

  if (Settings.find().count() === 0) {
    console.info('no settings in database!  creating a configuration file.');

    var configurationId = null;

    // crate our administrator
    configurationId = Settings.insert({
      keyword: 'sysadmin',
      name: 'Clinical Support Forum',
      logo: '',
      landingImage: '/images/groupthink/fish-groupthink.jpg',
      tagline: 'Support forums for the 21st century...',
      installed: false,
      live: false,
      maintenance: false,
      forkme: true,
      publicThread: topicId,
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

//===============================================================================
//===============================================================================


  var data = [
    { "createdBy" : "Jane Doe",
      "creatorId" : janedoeId,
      "createdAt" : new Date(),
      "topicId" : topicId,
      "text" : "\n\n\n\n\n\n\n\n<p class=\"p1\">Yo, check out the new community bulletin-board system we just released. &nbsp;It’s called GroupThink.</p>" },
    { "createdBy" : "mary",
      "creatorId" : maryId,
      "createdAt" : new Date(),
      "topicId" : topicId,
      "text" : "\n\n\n\n\n\n\n\n<p class=\"p1\">\n\n\n\n\n\n\n\n</p><p class=\"p1\">Sweet! &nbsp;You finally launched it? &nbsp;Final product and all? &nbsp;</p>"  },
    { "createdBy" : "Jane Doe",
      "creatorId" : janedoeId,
      "createdAt" : new Date(),
      "topicId" : topicId,
      "text" : "\n\n\n\n\n\n\n\n<p class=\"p1\">Well, it’s a public beta. &nbsp;We’re still working out bugs and stuff. &nbsp;But anybody can download, fork, login, etc.</p>" },
    { "createdBy" : "mary",
      "creatorId" : maryId,
      "createdAt" : new Date(),
      "topicId" : topicId,
      "text" : "\n\n\n\n\n\n\n\n<p class=\"p1\">Right on. &nbsp;What all got into the initial release?</p>" },
    { "createdBy" : "Jane Doe",
      "creatorId" : janedoeId,
      "createdAt" : new Date(),
      "topicId" : topicId,
      "text" : "\n\n\n\n\n\n\n\n<p class=\"p1\">Um, lets see, we got...</p>\n<p class=\"p1\"><ol><li><span style=\"font-size: 14px; line-height: 1.428571429;\">user defined themes</span><br></li><li><span style=\"font-size: 14px; line-height: 1.428571429;\">discussion forums</span><br></li><li><span style=\"font-size: 14px; line-height: 1.428571429;\">topic analytics</span><br></li><li><span style=\"font-size: 14px; line-height: 1.428571429;\">wysiwyg editor</span><br></li><li><span style=\"font-size: 14px; line-height: 1.428571429;\">rich font posts</span><br></li><li><span style=\"font-size: 14px; line-height: 1.428571429;\">tagging system</span><br></li><li><span style=\"font-size: 14px; line-height: 1.428571429;\">site branding</span><br></li><li><span style=\"font-size: 14px; line-height: 1.428571429;\">viral sharing</span><br></li><li><span style=\"font-size: 14px; line-height: 1.428571429;\">user profiles</span><br></li><li><span style=\"font-size: 14px; line-height: 1.428571429;\">admin controls</span><br></li></ol></p>" },
    { "createdBy" : "snowflake",
      "creatorId" : snowflakeId,
      "createdAt" : new Date(),
      "topicId" : topicId,
      "text" : "\n\n\n\n\n\n\n\n<p class=\"p1\">Hey! &nbsp;Congrats on releasing finally! &nbsp;Did you get the trigger filters and grammar check working yet?</p>" },
    { "createdBy" : "Jane Doe",
      "creatorId" : janedoeId,
      "createdAt" : new Date(),
      "topicId" : topicId,
      "text" : "\n\n\n\n\n\n\n\n<p class=\"p1\">Thanks, Snowflake! &nbsp;:)</p>\n<p class=\"p2\"><br></p>\n<p class=\"p1\">Nah, those are still on the roadmap. &nbsp;I wanted to release a vanilla version that could be forked into different types of forums before diving into some of those community specific features.</p>"},
    { "createdBy" : "wintermute",
      "creatorId" : wintermuteId,
      "createdAt" : new Date(),
      "topicId" : topicId,
      "text" : "\n\n\n\n\n\n\n\n<p class=\"p1\">ohai! &nbsp;Sweet site. &nbsp; So, what's the roadmap look like?</p>" },
    { "createdBy" : "Jane Doe",
      "creatorId" : janedoeId,
      "createdAt" : new Date(),
      "topicId" : topicId,
      "text" : "\n\n\n\n\n\n\n\n<p class=\"p1\">Mmmm… &nbsp;it’s kind of up in the air what’s going to go in the vanilla version, versus what’s going to get put into forked repos… &nbsp;but maybe something like this?</p>\n<p class=\"p2\"><ol><li><span style=\"font-size: 14px; line-height: 1.428571429;\">community moderation</span><br></li><li><span style=\"font-size: 14px; line-height: 1.428571429;\">upvotes; down votes</span><br></li><li><span style=\"font-size: 14px; line-height: 1.428571429;\">trigger filters</span><br></li><li><span style=\"font-size: 14px; line-height: 1.428571429;\">grammar flags</span><br></li><li><span style=\"font-size: 14px; line-height: 1.428571429;\">post images</span><br></li><li><span style=\"font-size: 14px; line-height: 1.428571429;\">post links</span><br></li><li><span style=\"font-size: 14px; line-height: 1.428571429;\">collaborative posts</span><br></li><li><span style=\"font-size: 14px; line-height: 1.428571429;\">sticky threads</span><br></li><li><span style=\"font-size: 14px; line-height: 1.428571429;\">public threads</span><br></li></ol></p>" },
    { "createdBy" : "wintermute",
      "creatorId" : wintermuteId,
      "createdAt" : new Date(),
      "topicId" : topicId,
      "text" : "\n\n\n\n\n\n\n\n<p class=\"p1\">Right on. &nbsp;That looks great. &nbsp;</p>" },
    { "createdBy" : "John Doe",
      "creatorId" : johndoeId,
      "createdAt" : new Date(),
      "topicId" : topicId,
      "text" : "\n\n\n\n\n\n\n\n<p class=\"p1\">In the age of Facebook and Twitter, what's happened to old-fashioned community? &nbsp;The ubiquity of Facebook and the global voice of Twitter creates one voice; one global monoculture. &nbsp;Praise be to Social Media. &nbsp;</p>" },
    { "createdBy" : "Jane Doe",
      "creatorId" : janedoeId,
      "createdAt" : new Date(),
      "topicId" : topicId,
      "text" : "\n\n\n\n\n\n\n\n<p class=\"p1\">You’re going off on a tangent again, John. &nbsp;It’s a bulletin board forum. &nbsp;</p>" },
    { "createdBy" : "John Doe",
      "creatorId" : johndoeId,
      "createdAt" : new Date(),
      "topicId" : topicId,
      "text" : "\n\n\n\n\n\n\n\n<p class=\"p1\">But what if you want to create your own community? &nbsp; Facebook and Twitter don’t let you hack global monoculture. &nbsp;At best, you can use their APIs.</p>" },
    { "createdBy" : "Jane Doe",
      "creatorId" : janedoeId,
      "createdAt" : new Date(),
      "topicId" : topicId,
      "text" : "\n\n\n\n\n\n\n\n<p class=\"p1\">It’s a bulletin board system, John. &nbsp;Use it for a product website. &nbsp;A community support group. &nbsp;A special interest group. &nbsp;I don’t care. &nbsp;It’s just a bulletin board system.&nbsp;</p>" }
  ];



//===============================================================================
//===============================================================================
// TOPICS

  if (Posts.find().count() === 0) {
    console.info('no posts in database!  adding some default posts');

    var postId = null;

    for (var j = 0; j < data.length; j++) {
      postId = Posts.insert({
        text: data[j].text,
        createdBy: data[j].createdBy,
        createdAt: data[j].createdAt,
        topicId: data[j].topicId,
        creatorId: data[j].creatorId
      });
      console.info('postId: ' + postId);
    }

  }

});
