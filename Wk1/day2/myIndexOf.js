function myIndexOf(input, target) {
   let i = 0;

   while (input[i] !== undefined) {
    if (input[i] === target) {
        return i;
    }
    i++;
   }

   return -1;
};


console.log(myIndexOf('bootcamp', 'o'));
console.log('bootcamp'.indexOf('o'));
console.log(myIndexOf([1, 2, 3, 4, 5], 5));
console.log([1, 2, 3, 4, 5].indexOf(5));