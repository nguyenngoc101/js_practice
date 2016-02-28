function sequence(tasks) {
  return function (cb) {
    var length = tasks.length;
    var final = '';
    tasks[0](function (err, data) {
      next(1, data);
    });

    function next(order, data) {
      if (order == (length)) {
        cb(null, data)
      } else {
        tasks[order](function (err, result) {
          final += result;
          next(order+1, result);
        }, data)
      }
    }
  };

}

function parallel(tasks) {
  return function (cb) {
    var count = tasks.length;
    var results = [];
    next(0);

    function next(order) {
      if (order === count) {
        cb(null, results);
      } else {
        tasks[order](function (err, data) {
          results.push(data);
          order += 1;
          next(order);
        });
      }
    }
  }
}

function race(tasks) {
  return function(cb) {
    var count = 0;
    for (var i = 0; i < tasks.length; i++) {
      call(i);
    }

    function call(order) {
      tasks[order](function (err, data) {
        count += 1;
        if (count === 1) {
          cb(null, data);
        }
      });
    }
  }
}

module.exports = {
  sequence: sequence,
  parallel: parallel,
  race: race
}
