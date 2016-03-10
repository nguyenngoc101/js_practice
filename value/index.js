function value(fn) {
  if (!(fn instanceof Function)) return fn;
  return value(fn.apply(null, []));
};
module.exports = value;
