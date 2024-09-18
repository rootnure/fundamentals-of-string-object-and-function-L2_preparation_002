const myPhone = {
    brand: 'Redmi',
    model: 'Note 9s',
    price: 23999,
    color: 'cyan',
    camera: '48MP',
    isNew: false,
};

// for of : array
// for in : object
for(const prop in myPhone) {
    console.log(prop);
    console.log(myPhone[prop]);
}

const phoneKeys = Object.keys(myPhone);
console.log(phoneKeys);

for(const key of phoneKeys) {
    console.log(key);
    console.log(myPhone[key]);
}