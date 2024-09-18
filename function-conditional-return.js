function add(price1, price2) {
    const total = price1 + price2;
    return total;
}
const bill = (20, 50);

function add2(price1, price2) {
    return price1 + price2;
}
const bill2 = add2(20, 50);

// console.log(bill, bill2);


function doMath(num1, num2) {
    const sum = num1 + num2;
    const difference = num1 - num2;
    const multiplication = num1 * num2;
    const division = num1 / num2;
    return division;
}

const result = doMath(5, 3);
// console.log(result);


function isEven(number) {
    if(number % 2 === 0){
        return true;
    }
    else {
        return false
    }
}

// console.log(isEven(41));
// console.log(isEven(50));


function isOdd(num) {
    if(num%2 === 1) {
        return true;
    }
    return false;
}

console.log(isOdd(15));
console.log(isOdd(21));
console.log(isOdd(28));