/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will takes
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.
Examples:
duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/
// use count characters to count the number of times each character appears in the word
// iterate over the word, if key of that letter exists, value++, otherwise assign
// value as 1
// return newly created object

function countCharacters(string) {
    let letters = string.split('');
    let letterObj = {};

    letters.forEach(el => {
        if (letterObj[el] === undefined) {
            letterObj[el] = 1;
        } else {
            letterObj[el]++;
        }
    })

    return letterObj;
}

console.log(countCharacters("apple"));

// iterate over object in countCharacters
// check if any keys have value >= mincount

function duplicateCharMinCount(string, minCount) {
    const countObj = countCharacters(string);

    let chars = Object.keys(countObj)
    console.log(chars);

    return chars.filter(char => countObj[char] >= minCount);
}

console.log(duplicateCharMinCount("apple", 2)) // ["p"]
console.log(duplicateCharMinCount("banana", 2)) // ["a", "n"]
console.log(duplicateCharMinCount("What about a longer string?", 3)) // ["a", "t", " "]