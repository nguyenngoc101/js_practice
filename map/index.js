function map(arr, callback, cxt) {
  if (!arr) return null;
  var result = [];
  for (var i=0; i<arr.length; i++) {
    result.push(callback.apply(cxt, [arr[i], i, arr]));
  }
  return result;
}

module.exports = map;
