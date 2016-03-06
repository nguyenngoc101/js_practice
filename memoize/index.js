function memoize(fn) {
  var called = 0;
  var result = [];
  return function() {
    var cxt = this;
    var args = [].slice.call(arguments);
    if (!result[args]) {
      result[args] = fn.apply(cxt, args);
    }
    return result[args];
  };
}

module.exports = memoize;
