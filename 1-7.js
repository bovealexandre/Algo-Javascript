const readlineSync = require("readline-sync");

let shoe = readlineSync.question('Can you give me you shoe size please?');
let birthyear = readlineSync.question('Can you give me your birth year please?');

let result = (((((shoe*2)+5)*50)-birthyear)+1766);

console.log(result);