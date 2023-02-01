/*
Given an array of integers, sort the array in increasing order based on the frequency 
of the values. If multiple values have the same frequency, sort them in decreasing 
order. Return the sorted array.

Example:
    const arr1 = [1, 1, 2, 2, 2, 3];
    const arr2 = [2, 3, 1, 3, 2];
    const arr3 = [-1, 1, -6, 4, 5, -6, 1, 4, 1];

    frequencySort(arr1); // => [3, 1, 1, 2, 2, 2];
    frequencySort(arr2); // => [1, 3, 3, 2, 2];
    frequencySort(arr3); // => [5, -1, 4, 4, -6, -6, 1, 1, 1];
*/

function frequencySort(arr) {
    const obj = {};

    arr.forEach(key => {
        if (key in obj) {
            obj[key]++
        } else {
            obj[key] = 1;
        }
    })

    return arr.sort((a,b) => {
        if (obj[a] > obj[b]) return 1;
        else if (obj[a] < obj[b]) return -1;
        else return b - a;
    })
};