/***********************************************************************
Write a function using fat arrow syntax, `sentenceMaker` that
takes in any number of arguments as strings, and create a sentence out
of it. You may assume that all arguments will be strings. Add an exclamation
mark at the end of the sentence.
Examples:
sentenceMaker('Hello', 'World'); // 'Hello World!'
sentenceMaker('I', 'love', 'coding'); // 'I love coding!'
sentenceMaker('The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'); // 'The quick brown fox jumps over the lazy dog!'
***********************************************************************/

// create an arrow function
// use our rest parameter to take in any number of arguments
// return a string that joins the arguments to make a sentence
// add an exclamation mark

const sentenceMaker = (...strings) => {
    return strings.join(' ')+'!';
};

console.log(sentenceMaker('Hello', 'World')); // 'Hello World!'
console.log(sentenceMaker('I', 'love', 'coding')); // 'I love coding!'
console.log(sentenceMaker('The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog')); // 'The quick brown fox jumps over the lazy dog!'