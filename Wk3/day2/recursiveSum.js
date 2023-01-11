//Recursive Sum

/* Write a function called recursive sum, that takes in an array consisting of 
numbers and nested arrays consisting of numbers (and nested nested arrays, and so
on). The function return the sum of all of the numbers within the array, regardless 
of nesting. 
Examples:
recursiveSum([1, 2, 3, 4, 5, 6, 7]) => 28
recursiveSum([1, 2, [3, 4], [5, 6, 7]]) => 28
recursiveSum([1, 2, [3, 4], [5, [6, 7]]]) => 28
*/

function recursiveSum(arr) {
    let sum = 0;

    console.log(`incoming array ~~>`, arr, `sum ~~>`, sum);

    for (let i = 0; i < arr.length; i++) {
        console.log(`arr[i] ~~>`, arr[i]);
        if (Array.isArray(arr[i])) {
            console.log(`sum before arr[i] added ~~>`, sum);
            console.log(`sum += `, arr[i]);
            sum += recursiveSum(arr[i]);
            console.log(`sum after arr[i] added ~~>`, sum)
        } else {
            console.log(`sum before arr[i] added ~~>`, sum);
            console.log(`sum += `, arr[i]);
            sum += arr[i];
            console.log(`sum after arr[i] added ~~>`, sum)
        }
    }
    console.log(`returning value ~~>`, sum);
    return sum;
};
 
 