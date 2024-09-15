const sentence = "I am learning web development.";
// const result = ".tnempoleved bew gninrael ma I";

let reverse = '';

// for(const letter of sentence) {
//     // console.log(letter);
//     reverse = letter + reverse;
// }
// console.log(reverse);

// ignore this one
// for(let i = 0; i < sentence.length; i++) {
//     // console.log(i);
//     // console.log(sentence[i]);
//     const letter = sentence[i];
//     reverse = letter + reverse;
// }
// console.log(reverse);

// shortcut
const reversed = sentence.split("").reverse().join("");
console.log(reversed);