/*
Write a function myIndexOf(arr, target) that takes in an array and target value 
as args. The function should return the first index where the target is found in 
the array. If the target is not found, it should return -1. Solve this without using 
Array.indexOf.
*/

function myIndexOf(arr, target) {
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }

    return -1;
};


console.log(myIndexOf([1, 2, 3, 4, 5], 4));
console.log(myIndexOf([1, 2, 3, 4, 5], ));