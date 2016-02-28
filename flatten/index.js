function flatten(arr) {
  var flatArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      flatArr = flatArr.concat(flatten(arr[i]));
    } else {
      flatArr.push(arr[i]);
    }
  }
  return flatArr;
}

module.exports = flatten;
