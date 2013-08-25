exists = function(x) { return x != null };

isTruthy = function(x) { return (x !== false) && exists(x) };

doWhileTrue = function(cond, func) {
  if(isTruthy(cond))
    return func();
  else
    return undefined;
}