function memoize(fn) {
  var called = 0;
  var result;
  return function() {
    var cxt = this;
    var args = [].slice.call(arguments);
    if (called == 0) return (result=fn.apply(cxt, args));
    else return result;
  };
}

module.exports = memoize;
