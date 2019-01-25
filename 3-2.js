const readlineSync = require("readline-sync");
let arr1 = [1, 2, 3, 4, 5];
let arr2 =[100, 101, 102]
let result=0;
let result2=0;
for (let elem of arr1) {
  result += elem;
  }

for (let elem of arr2) {
  result2 += elem;
  }

result /= arr1.length;
result2 /= arr2.length;
console.log(result);
console.log(result2);