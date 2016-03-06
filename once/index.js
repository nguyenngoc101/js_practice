function once(fn) {
  var called = 0;
  var result;
  return function() {
    var args = [].slice.call(arguments);
    var self = this;
    called++;
    if (called == 1) {
      result = fn.apply(self, args);
    }
    return result;
  }
}


module.exports = once;
