// Your task is to write a function that takes a string and return a new string with all vowels removed.
function disemvowel(str) {
    const vowels = ["a","e","i","o","u"];
    return str
            .split('') // splits string to array of substrings and returns new array
            .filter(letter => !vowels.includes(letter.toLowerCase())) // creates new array with elements that pass test
            .join(''); // converts elements of an array into a string
    console.log(str);
}
// Cleaner version
function disemvowel(str) {
    return str.replace(/['aeiou']/ig, ''); // i= case insensitive and g = global modifier
}