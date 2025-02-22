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
    console.log(prop);
    console.log(mobile[prop]);
}