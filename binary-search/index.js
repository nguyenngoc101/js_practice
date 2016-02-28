function binary_search(list, lo,  hi, key)
{
    var mid;
    if (lo > hi)
    {
        return -1;
    }
    mid = (lo + hi) / 2 | 0;
    if (list[mid] == key)
    {
       return mid;
    }
    else if (list[mid] > key)
    {
        return binary_search(list, lo, mid - 1, key);
    }
    else if (list[mid] < key)
    {
        return binary_search(list, mid + 1, hi, key);
    }
}
function binaryIndexOf(arr, searchElement) {
    'use strict';

    var minIndex = 0;
    var maxIndex = arr.length - 1;
    var currentIndex;
    var currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0;
        currentElement = arr[currentIndex];

        if (currentElement < searchElement) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > searchElement) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }

    return -1;
}

module.exports = binaryIndexOf
/*
module.exports = function(arr, key) {
return binary_search(arr, 0, arr.length-1, key);
}
*/
