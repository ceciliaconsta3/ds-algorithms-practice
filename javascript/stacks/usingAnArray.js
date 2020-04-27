
// Find if a given word is a palindrome
let letters = [];
let word = "hannah"; // given word
let rword = ""; // words in reverse

// 1. Put characters of the given word into an array
// 2. Pop of the stack of characters in reverse order
// 3. Compare the initial array to the reversed array and log out if true

for (let i = 0; i < word.length; i++){
    letters.push(word[i]);
    console.log(letters);
}

for (let i = 0; i < word.length; i++){
    rword += letters.pop();
    console.log(rword);
}

if (rword === word){
    console.log("Yes, this is a palindrome");
} else {"No, this is not a palindrome"}