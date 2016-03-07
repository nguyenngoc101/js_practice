
function quickSort(arr, start, end) {
  if(start < end) {
    var pivot = partition(arr, start, end);
    quickSort(arr, start, pivot-1);
    quickSort(arr, pivot+1, end);
  }
}
/* == Cach 1 == */
function quicksort(arr, start, end) {
  var pivot = Math.floor((start + end)/2);
  var temp;
  var i = start;
  var j = end;
  while (i<=j) {
    while(arr[i] < arr[pivot]) i++;
    while(arr[j] > arr[pivot]) j--;
    if (i<=j) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  }
  if(start < j)
      quicksort(arr,start,j);
  if(i < end)
      quicksort(arr,i,end);
  console.log('return: '+j);
  return j;
}
/* == Cach 2 == */
/*
void swap (int a[], int left, int right)
{
 int temp;
 temp=a[left];
 a[left]=a[right];
 a[right]=temp; 
}//end swap
 
void quicksort( int a[], int low, int high )
{
 int pivot;
 // Termination condition! 
 if ( high > low )
 {
  pivot = partition( a, low, high );
  quicksort( a, low, pivot-1 );
  quicksort( a, pivot+1, high );
 }
} //end quicksort
 
int partition( int a[], int low, int high )
{
 int left, right;
 int pivot_item;
 int pivot = left = low; 
 pivot_item = a[low]; 
 right = high;
 while ( left < right ) 
 {
  // Move left while item < pivot 
  while( a[left] <= pivot_item ) 
   left++;
  // Move right while item > pivot 
  while( a[right] > pivot_item ) 
   right--;
  if ( left < right ) 
   swap(a,left,right);
 }
 // right is final position for the pivot 
 a[low] = a[right];
 a[right] = pivot_item;
 return right;
}//end partition

*/
function sort(arr) {
  quicksort(arr, 0, arr.length-1);
  return arr;
}

var arr = [5, 1, 4, 2, 3];
var sorted = sort(arr);

console.log('sorted: '+sorted);


module.exports = sort;
