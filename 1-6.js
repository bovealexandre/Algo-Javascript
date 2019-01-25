const readlineSync = require("readline-sync");

let n1 = readlineSync.question('Can you give me a integer number please?');
let n2 = readlineSync.question('Can you give me another integer number please?');

let result = n1 % n2;

console.log(result);