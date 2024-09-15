const person = {
    name: 'Mr. Hawon',
    age: 44,
    profession: 'Foolis',
    salary: 50000,
    isMarried: true,
    'full-name': 'Mr. Hawon Uncle',
}

// console.log(person);

// // dot notation
// console.log(person.salary);
// console.log(person.name);

// // bracket notation
// console.log(person['age']);
// const keyName = 'profession';
// console.log(person[keyName]);
// console.log(person.full-name); // can't use
// console.log(person['full-name']);

// // set property value
console.log(person);
person.salary = 60000;
person['full-name'] = 'Mr. Hawon Uncle Jii'
const propertyName = 'isMarried';
person[propertyName] = false;
console.log(person);