function binaryToString(binaryBlob) {
    // Your code here
    // split our incoming blob into pieces of 8
    // convert each piece into charcode for the ascii table
    // convert charcode to letter
    // add the piece to the string
    // return the string

    let string = '';

    for (let i = 0; i < binaryBlob.length; i += 8) {
        const binary = binaryBlob.slice(i, i + 8);
        const charcode = parseInt(binary, 2);
        const letter = String.fromCharCode(charcode);
        string += letter;
    }

    return string;
}

/* Comment in the code below to run local tests */
// console.log(binaryToString('010000010100001001000011')); // 'ABC'
// console.log(binaryToString('001101100011011100111000')); // '678'