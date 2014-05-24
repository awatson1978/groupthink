//isAnonymous = function(userId) {
//  return userId == 'viewer' || !exists(userId);
//};
//
//isAdmin = function(userId) {
//  return !isAnonymous(userId) && Roles.userIsInRole(userId, ['admin']);
//};
//
//isValidated = function(userId) {
//  return !isAnonymous(userId) && Roles.userIsInRole(userId, ['validated']);
//};
//
//isActive = function(userId) {
//  return !isAnonymous(userId) && !Roles.userIsInRole(userId, ['suspended']);
//};
//
//isOwner = function(userId, docOwner) {
//  return userId === docOwner;
//};
