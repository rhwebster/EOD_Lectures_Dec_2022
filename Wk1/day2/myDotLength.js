function myDotLength(input) {
    let i = 0;
    let length = 0;

    while (input[i] !== undefined) {
        length++;
        i++;
    }

    return length;
};

console.log(myDotLength('onomatopoeia'));
console.log('onomatopoeia'.length);
console.log(myDotLength([1, 2, 3, 4, 5]));
console.log([1, 2, 3, 4, 5].length);