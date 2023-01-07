/***********************************************************************
Write a function `keyAdderUniqueVal(object, key, value)` that accepts an
object, a string to be set as a key in that object, and a value. When invoked
the function should assign the key and value arguments as a key value pair in
the object argument ONLY IF the value is not already a value for a different
key in the object. Return the mutated object.
See below for examples
let cat = { name: 'Willie', color: 'orange' };
keyAdderUniqueVal(cat, "toy", "yarn"); // => {name: "Willie", color: "orange", toy: "yarn"}
keyAdderUniqueVal(cat, "fruit", "orange"); // => {name: "Willie", color: "orange", toy: "yarn"}
console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" }
***********************************************************************/
// take in an object
// pull values from object keys
// if incoming values already exists in the object, do nothing
// if incoming value doesn't exist, insert the key and value as a pair
// return new object

function keyAdderUniqueVal(object, key, value) {
    let vals = Object.values(object);

    if (vals.indexOf(value) === -1) {
        object[key] = value;
    };

    return object;
}

let cat = { name: 'Willie', color: 'orange' };
console.log(keyAdderUniqueVal(cat, "toy", "yarn")); // => {name: "Willie", color: "orange", toy: "yarn"}
console.log(keyAdderUniqueVal(cat, "fruit", "orange")); // => {name: "Willie", color: "orange", toy: "yarn"}
console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" }