/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.
Examples:
isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/


function isSorted(arr) {
    // console.log(arr);

    return (arr.length <= 1) ? true : (arr[0] < arr[1]) ? isSorted(arr.slice(1)) : false;
    
    // if (arr.length <= 1) return true;

    // if (arr[0] < arr[1]) {
    //     return isSorted(arr.slice(1))
    // }

    // return false;
};

console.log(isSorted([1, 2, 3, 4, 5]));

// arr = [5]