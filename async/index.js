function sequence(tasks) {
  return function (cb) {
    tasks[0](function (err, data1) {
      tasks[1](function (err, data2) {
        cb(null, data2)
      }, data1)
    })
  };
}

function parallel(tasks) {
  var count = tasks.length;
  var results = [];
  function next(order) {
    if (order === count-1) {
      cb(null, results);
    }
    tasks[order](function (err, data) {
      results.push(data);
      next(order+1);
    });
  }
  return function (cb) {
    next(0);
  }
}

module.exports = {
  sequence: sequence,
  parallel: parallel
}
