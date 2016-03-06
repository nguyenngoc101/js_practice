
function quickSort(arr, start, end) {
  if(start < end) {
    var pivot = partition(arr, start, end);
    quicksort(arr, start, pivot-1);
    quicksort(arr, pivot+1, end);
  }
}

function partition(arr, start, end) {
  var pivot = Math.floor((start + end)/2);
  var temp;
  var i = start;
  var j = end;
  while (i<j) {
    while(i < j && arr[i] <= arr[pivot]) i++;
    while(i < j && arr[j] > arr[pivot]) j--;
    if (i<j) {
      arr[i] = temp;
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  }
  return j;
}


function sort(arr) {
  return quickSort(arr, 0, arr.length-1);
}
var arr = [5, 1, 4, 2, 3];
console.log(partition(arr, 0, 4));
console.log(arr);


module.exports = sort;
