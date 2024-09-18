function vaatKhao() {
    console.log('hand wash koro');
    console.log('khawar table er chair e bosho');
    console.log('khawat jonno clean plate nao');
    console.log('plate e khabar dabar nao');
    console.log('gopat gopat kore khao');
}

// vaatKhao();



// 3 ---> 3*3 ---> 9
// 4 ---> 4*4 ---> 16
// 9 ---> 9*9 ---> 81

function square(number) {
    console.log('value of the number parameter', number);
    const borgo = number * number;
    console.log('square of the given number is:', borgo);
}

// square(7);
// console.log('------------------');
// square(15);
// square(3);
// square(115);

// // multiple parameter
function add(number1, number2) {
    const sum = number1 + number2;
    console.log(sum);
}

add(2, 7);
add(9, 12);


function addAll(a, b, c, d, e){
    const total = a + b + c + d + e;
    console.log(a, b, c, d, e);
    console.log(total);
}

addAll(3, 6, 5, 4, 1);
addAll(8, 5, 7, 11); // must provide equal amount of values according to parameter