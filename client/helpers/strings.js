slugify = function(text) {
  text = text.replace(/[^-a-zA-Z0-9,&\s]+/g, '');
  text = text.replace(/-/g, '_');
  text = text.replace(/\s/g, '-');
  text = text.toLowerCase();
  return text;
};

urlify = function(text) {
  text = text.replace(/((https?\:\/\/)|(www\.))(\S+)(\w{2,4})(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi, function(url) {
    var fullUrl;
    fullUrl = url;
    if (!fullUrl.match('^https?:\/\/')) {
      fullUrl = 'http://' + fullUrl;
    }
    return '<a href="' + fullUrl + '" target=_"blank">' + url + '</a>';
  });
  return text;
};

roomPath = function(topicSlug, channelSlug) {
  var path, room, roomSlug;
  room = Rooms.findOne({ topicSlug: topicSlug, channelSlug: channelSlug, live: true });
  if(!exists(room))
    return;
  roomSlug = room.slug;
  path = '/channels/' + channelSlug + '/' + roomSlug;
  return path;
};