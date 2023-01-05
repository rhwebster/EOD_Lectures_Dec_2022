/*
Write a function `longestWord(sentence)` that takes in a sentence string as an
argument. The function should return the longest word in the sentence.
You must use  `Array.forEach` in your solution.
Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.
Examples:
console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''
*/

// first we break up the sentence into different words .split(' ')
// find max length, so set variable
// iterate through array, and check if array[i] has greater length than max
// if so, set value to max length
// find the word that the length matches and return the word

let longestWord = function(sentence) {
    let strings = sentence.split(' ');
    let max = '';

    strings.forEach((word) => {
        if (word.length > max.length) {
            max = word;
        }
    })

    return max;
}

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''