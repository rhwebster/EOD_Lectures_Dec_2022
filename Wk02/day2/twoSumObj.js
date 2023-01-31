/* 
Write a function twoSum(arr, target) that accepts an array and a target number 
as args. The function should return a boolean indicating if two distinct numbers 
of the array add up to the target calue. You can assume that input array constains 
only unique numbers. Use an object (hint: utilize keys) to create a more efficient solution. 
*/

// 

function twoSum(arr, target) {

    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        let value = arr[i]
        let solution = target-value
        console.log(value, solution, obj);
        if (obj[solution]) {
            return true;
        } else {
            obj[value] = true;
        }
    }

    return false;
};

console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
console.log(twoSum([4, 6, 2, 3], 8)); // true
console.log(twoSum([4, 6, 2, 3], 11)); //false