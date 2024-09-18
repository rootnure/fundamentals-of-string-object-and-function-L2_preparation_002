/**
 * for given string tell me whether it has even number of characters or not
 */

function isEvenSizedString(str) {
    const size = str.length;
    console.log(str, size);
    if (size % 2 === 0) {
        console.log('even size');
        return true;
    }
    else {
        console.log('odd size');
        return false;
    }
}

// const op1 = isEvenSizedString('Noakhali');
// const op2 = isEvenSizedString('Kuakata');
// console.log(op1, op2);


function doubleOrTriple(number, doDouble) {
    if (doDouble === true) {
        const result = number * 2;
        return result
    }
    else {
        const result = number * 3;
        return result;
    }
}

// console.log(doubleOrTriple(25, true));
// console.log(doubleOrTriple(20, true));
// console.log(doubleOrTriple(11, false));


function numberOfElements(numbers) {
    const len = numbers.length;
    return len;
}

console.log(numberOfElements([6, 54, 9, 6, 8, 46, 5, 16, 51]));