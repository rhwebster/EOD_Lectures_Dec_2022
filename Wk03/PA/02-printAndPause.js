/***********************************************************************
Given a list of positive integers, print each integer and pause for that
many milliseconds before printing the next one. Make sure you use a recursive
approach to solve this problem.
Example:
printAndPause([200, 800, 200, 800, 200, 800])
200
// pause 200ms
800
// pause 800ms
200
// pause 200ms
800
// pause 800ms
200
// pause 200ms
800
// pause 800ms
Run tests on just this file by typing `npm test test/02-print-and-pause-spec.js`
on the command line.
***********************************************************************/

// using recursive approach
// need a base case & recursive step
// use array.shift to remove first element
// save element, print that element, then pause for that many milliseconds
// call printandPause recursively until array is empty

function printAndPause(nums) {
    if (!nums.length) return;

    let pause = nums.shift();
    console.log(pause);

    setTimeout(function () {
        printAndPause(nums);
    }, pause);
};

printAndPause([200, 800, 200, 800, 200, 800])