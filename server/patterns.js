PasswordPattern = Match.Where(function (password) {
  check(password, String);

  if(password.length < 7) return false;

  return (!!(password.match(/[A-Z]/i) &&  password.match(/[0-9]/)));
});