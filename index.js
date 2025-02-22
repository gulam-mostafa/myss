let mobile ={
    brand:'reame',
    price: 2100,
    color: 'black',
    isClean: false
}
mobile.brand= 'realme-x2'
// console.log(mobile);

let keys =Object.keys(mobile);
let valus = Object.values(mobile);
// console.log(keys , valus);
for( let prop in mobile){
    // console.log(prop);
    // console.log(mobile[prop]);
}

let numbers = [23, 256, 245, 455, 45,785, 426, 78,]
for(i = 0; i < numbers.length; i = i+1){
    console.log(numbers[i]);
}
console.log('result ', numbers.length);