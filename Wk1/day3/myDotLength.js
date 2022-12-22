// count how many characters are in the data type
// iterate through the datatype, and increment the count each time
// return the count as the value


function myDotLength(input) {
    let i = 0;
    let count = 0;

    while (input[i] !== undefined) {
        count++;
        i++;
    }

    return count;
};

console.log(myDotLength('octogon'));
