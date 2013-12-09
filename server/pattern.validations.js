PasswordPattern = Match.Where(function (password) {
  check(password, String);

  if(password.length < 7) return false;

  return (!!(password.match(/[A-Z]/i) &&  password.match(/[0-9]/)));
});

EmailPattern = Match.Where(function (email) {
  check(email, String);

  var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;

  return !!(email.match(pattern));
});