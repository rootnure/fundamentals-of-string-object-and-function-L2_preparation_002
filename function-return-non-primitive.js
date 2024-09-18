/**
 * create function that will return only the even numbers
 * return the sum of even numbers
 */

function filterEvenNumbers(numbers) {
    const evenArray = [];
    for (const number of numbers) {
        if (number % 2 === 0) {
            evenArray.push(number);
        }
    }
    return evenArray;
}

function sumOfEvenNumbers(numbersArray) {
    const evenNumbers = filterEvenNumbers(numbersArray);
    let evenSum = 0;
    for (const number of evenNumbers) {
        evenSum = evenSum + number;
    }
    return evenSum;
}

const numberList = [23, 4, 98, 51, 12, 365, 16, 52, 5, 16, 5, 66, 20];
const evenNumbersSum = sumOfEvenNumbers(numberList);
console.log(evenNumbersSum);