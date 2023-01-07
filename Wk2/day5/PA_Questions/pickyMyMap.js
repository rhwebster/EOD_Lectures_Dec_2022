/***********************************************************************
Write a function `pickyMyMap` that accepts an array and a callback as
arguments. The function should call the callback for each element of the
array, passing in the element and return a new array of the results of
each call to the callback function. If the result of the callback function
returns something falsey, then do not add it in the result array.
const nums = [1, 2, 3, 4];
pickyMyMap(nums, (num) => num - 2); // [-1, 1, 2]
const booleans = [true, false, true, false, true];
pickyMyMap(booleans, (boolean) => !boolean); // [true, true]
You may not use Array's `map()`, `filter()`, or `forEach()` methods.
***********************************************************************/
// create new array
// iterate over incoming array and check each element and if the element passed through
// the incoming callback function is truthy, then push cb(el) into the new array
// return our new array

function pickyMyMap(arr, cb) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let el = arr[i]
        if (cb(el)) {
            newArr.push(cb(el));
        }
    };

    return newArr;
};

const nums = [1, 2, 3, 4];
console.log(pickyMyMap(nums, (num) => num - 2)); // [-1, 1, 2]
const booleans = [true, false, true, false, true];
console.log(pickyMyMap(booleans, (boolean) => !boolean)); // [true, true]