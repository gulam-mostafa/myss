const numbers = [1, 21, 56];
const friends = ["mango", "kola", "jam"];
const address = ["dhaka", "comilla", "gazipur"];
const mixedArray = [12, "dhaka", true, 56.36];

numbers.push(989, 12, 23);
numbers.pop();

// for(let num of numbers){
//     console.log(num);
//     console.log("o ok alright");
// }

let num = 0;
let sum = 0;

while (num <= 50) {
  console.log("LOOP", num);
  sum = sum + num;
  console.log(sum);
  num = num + 25;
}
