/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.
Examples:
let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer
let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/
// split sentence into array
// iterate over the array of words
// for each iteration, loop through the obj keys
// check if the word in array ends with an obj key
// if so, replace word with word passed through cb
// otherwise return word
// join array back into sentence

function suffixCipher(sentence, cipher) {
    // Your code here
    let words = sentence.split(' ');
    // for (let i = 0; i < words.length; i++) {
    //     for (let suffix in cipher) {
    //         if (words[i].endsWith(suffix)) {
    //             words[i] = cipher[suffix](words[i]);
    //         }
    //     }
    // }

    // return words.join(' ');\

    words.map(el => {
        for (let suffix in cipher) {
            if (el.endsWith(suffix)) {
                el = cipher[suffix](el);
            }
        }
    });
    return words.join(' ');
};