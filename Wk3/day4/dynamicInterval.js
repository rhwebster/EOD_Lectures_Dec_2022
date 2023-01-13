//dynamicIntervalCount

/*
Write a function `dynamicIntervalCount` that accepts a callback, delay
in milliseconds, and an optional amount as arguments. The function should 
set an interval with the given callback and delay. If an amount argument 
is passed, the interval should be cleared after the callback has been 
called 'amount' number of times. If an amount argument is not passed,
the interval should run indefinitely and `dynamicIntervalCount` should instead
return the Timeout object for the interval.
Examples:
dynamicIntervalCount(function() {
    console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times
const timeoutObject = dynamicIntervalCount(function() {
    console.log('hi');
}, 500); // prints 'hi' at 500ms intervals indefinitely
console.log(timeoutObject); // Timeout { ... }
*/

// return a normal setInterval function until the amount value === 0
// once value === 0 clear the interval
// if amount value === undefined, return setInterval with cb and delay indefinitely

function dynamicIntervalCount(cb, delay, amount) {

    if (amount === undefined) {
        return setInterval(cb, delay);
    } else {
        let interval = setInterval(function () {
            if (amount === 0) {
                clearInterval(interval);
            }
            cb();
            amount--;
        }, delay);
    }
};