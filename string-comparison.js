/**
 * ---------STRING COMPARISON------------
 * toLowerCase() --> convert all character of string to lowercase
 * toUpperCase() --> convert all character of string to uppercase
 * trim() --> trim >white_space> of string from beginning or ending
 */


const school = "XYZ School";

// console.log(school);
// console.log(school.toUpperCase());
// console.log(school.toLowerCase());

// uppercase: ABCD EFG
// lowercase: abcd efg


const subject = "Math";
const book = "math";

if(subject.toLowerCase() === book.toLowerCase()) {
    // console.log("subject r book milla gechey re...");
}
else {
    // console.log("eita amr subject na");
}

// trim()

const drink = 'water';
const liquid = '   water ';

if(drink.trim() === liquid.trim()) {
    console.log("panir opr nam jibon");
}
else {
    console.log("sumudre pani acey khaite pari na");
}