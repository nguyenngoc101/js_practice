// ES5
var Middleware = function() {};

Middleware.prototype.use = function(fn) {
  var self = this;

  this.go = (function(stack) {
    return function(next) {
      stack.call(self, function() {
        fn.call(self, next.bind(self));
      });
    }.bind(this);
  })(this.go);
};

Middleware.prototype.go = function(next) {
  next();
};

/*
// ES6
class Middleware {
  use(fn) {
    this.go = ((stack) => (next) => stack(() => fn.call(this, next.bind(this))))(this.go);
  }

  go = (next) => next()
}
*/

module.exports = Middleware;
