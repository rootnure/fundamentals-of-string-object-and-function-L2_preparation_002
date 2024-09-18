/**
 * OBJECTIVE: Write a function to return the sum of an array elements
 * STEPS:
 * Step-1. declare a function
 * Step-2. call check whether the function is called properly
 * Step-3. set a parameter(s)
 * Step-4. pass the parameter(s) to the function, check if parameter(s) passed in proper format
 * Step-5. do the function tasks (step by step)
 */

function sumOfNumbers(numbers) {
    let sum = 0;
    for (const number of numbers) {
        console.log(number);
        sum = sum + number;
    }
    return sum;
}

const marks = [88, 85, 87, 91, 74]
const sum = sumOfNumbers(marks);
console.log('Sum of numbers is:', sum);