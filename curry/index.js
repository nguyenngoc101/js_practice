function curry (fn) {
  var len = fn.length;
  var args = [];

  return function invoke() {
    args = args.concat(Array.prototype.slice.call(arguments));
    if (args.length === len) {
      var argsTmp = args.slice();
      args = [];
      return fn.apply(null, argsTmp);
    } else {
      return invoke;
    }
  }
}

function curry(fx) {
  var arity = fx.length;

  return function f1() {
    var args = Array.prototype.slice.call(arguments, 0);
    if (args.length >= arity) {
      return fx.apply(null, args);
    }
    else {
      return function f2() {
        var args2 = Array.prototype.slice.call(arguments, 0);
        return f1.apply(null, args.concat(args2)); 
      }
    }
  };
}

//http://blog.carbonfive.com/2015/01/14/gettin-freaky-functional-wcurried-javascript/
/*
var add = curry(function(a, b, c, d) {
    return a + b + c + d;
});

var firstTwo = add(1)(2);
console.log(firstTwo(3)(4));
var firstThree = firstTwo(5);
console.log(firstThree(6));
*/
module.exports = curry
