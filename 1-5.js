const readlineSync = require("readline-sync");

let n1 = readlineSync.question('Can you give me a number with decimal please?');
let n2 = readlineSync.question('Can you give me another number with decimal please?');

let result = Math.floor(n1) * n2;

console.log(result);