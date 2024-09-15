const myPC = {
    brand: 'DCL',
    basePrice: 32000,
    processor: {
        brand: 'intel',
        model: 'i3-10110U',
        baseClock: '2.10GHz',
        boostClock: '2.56GHz'
    },    
    storage: [
        {
            capacity: '1TB',
            position: 'internal',
            port: 'SSD_0',
            brand: 'Acer',
            price: 4889,
        },
        {
            capacity: '960GB',
            position: 'external',
            port: 'USB_00',
            price: 8700,
        },
        {
            capacity: '256GB',
            position: 'external',
            port: 'USB_01',
            price: 2650,
        },
    ],
    memory: [
        {
            brand: 'Apollo',
            capacity: '8GB',
            busSpeed: '2666MHz',
            price: 2600,
        },
        {
            brand: 'Adata',
            capacity: '8GB',
            busSpeed: '2666MHz',
            price: 2750,
        }
    ],
};

// console.log(myPC);
// const keys = Object.keys(myPC);
// console.log(keys);
// const values = Object.values(myPC);
// console.log(values);

// // nesting
const secondSSDprice = myPC.storage[1].price;
console.log(secondSSDprice);
myPC.storage[2].port = 'USB_1';
const thirdSSDport = myPC.storage[2].port;
console.log(thirdSSDport);

// // delete property
console.log(myPC);
delete myPC.basePrice;
console.log(myPC);
