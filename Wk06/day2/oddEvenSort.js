/*
Given an array, sort it such that the odds appear in ascending order on the left, 
then the evens on the right. (Remember, try to do this in-place!).

Example:
    const arr1 = [5, 4, 7, 2, 9, 8, 1, 6, 3];
    const arr2 = [5, 8, 13, 6, 22, 14, 9];

    oddEvenSort(arr1); // => [1, 3, 5, 7, 9, 2, 4, 6, 8]
    oddEvenSort(arr2); // => [5, 9, 13, 6, 8, 14, 22]
*/

function oddEvenSort(arr) {
    const sorted = arr.sort((a, b) => a-b);
    return sorted.sort(isOdd);
}

function isOdd(a, b) {
    if (a % 2 !== 0 && b % 2 === 0) {
        return -1;
    } else {
        return 0;
    }
};

const arr1 = [5, 4, 7, 2, 9, 8, 1, 6, 3];
console.log(oddEvenSort(arr1));