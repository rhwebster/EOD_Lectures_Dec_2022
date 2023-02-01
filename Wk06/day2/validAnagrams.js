/*
Given two strings, s and t, write a function that determines if s and t are anagrams

Example:
    let s = "anagram";
    let t = "nagaram";

    validAnagrams(s, t); => true
*/

// split each word. sort the new array, then joined the array

function validAnagrams(s, t) {
    const sSorted = s.split('').sort().join('');
    const tSorted = t.split('').sort().join('');

    return sSorted === tSorted;
}