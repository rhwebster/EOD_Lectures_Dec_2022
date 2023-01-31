/*
Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.
Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.
Examples:
console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'
*/

// define what a vowel is. set variable = 'AEIOUaeiou'
// iterate through the word to find vowels. iterate backwards;
// defined word[i] as letter
// if conditional to see if letter was a vowel
// remove using slice method
// return our new word

console.log(removeLastVowel('hello'));
console.log(removeLastVowel('goodbye'));
console.log(removeLastVowel('please'));
console.log(removeLastVowel('rhythm'));
console.log(removeLastVowel('laser'));
console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

function removeLastVowel(word) {
    let vowels = 'AEIOUaeiou';

    for (let i = word.length-1; i >= 0; i--) {
        let letter = word[i];
        if (vowels.includes(letter)) {
            word = word.slice(0, i)+word.slice(i+1);
            return word;
        }
    }

    return word;
};

function hipsterfy(sentence) {
    let words = sentence.split(' ');
    let hipsterfied = words.map(el => removeLastVowel(el));
    return hipsterfied.join(' ');

    // return sentence.split(' ').map(removeLastVowel).join(' ');
};

console.log(removeLastVowel('hello'));
console.log(removeLastVowel('goodbye'));
console.log(removeLastVowel('please'));
console.log(removeLastVowel('rhythm'));
console.log(removeLastVowel('laser'));
console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'