function partition(arr, left, right)
{
      var i = left, j = right;
      var tmp;
      var pivot = arr[(left + right) / 2 | 0];
      while (i <= j) {
            while (arr[i] < pivot)
                  i++;
            while (arr[j] > pivot)
                  j--;
            if (i <= j) {
                  tmp = arr[i];
                  arr[i] = arr[j];
                  arr[j] = tmp;
                  i++;
                  j--;
            }
      };
      return j;
}

function quickSort(arr, left, right) {
      var index = partition(arr, left, right);
      if (left < index)
            quickSort(arr, left, index);
      if (index+1 < right)
            quickSort(arr, index+1, right);
}


function sort(arr) {
  quickSort(arr, 0, arr.length-1);
  return arr;
}

var arr = [2,3];
var sorted = sort(arr);

console.log('sorted: '+sorted);


module.exports = sort;
