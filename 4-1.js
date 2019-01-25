const readlineSync = require("readline-sync");
let CalcSurface = (a, b) =>{
  return a*b;

}

a = readlineSync.question('Can you give me a length please?');
b = readlineSync.question('Can you give me a width please?');

console.log (CalcSurface(a,b)); 