const readlineSync = require("readline-sync");

function factorial(a) {
  if (a < 0) {
    console.log("valeur négative");
      return;
  }
  if (a === 0) {
      return 1;
  }
  
  return a * factorial(a - 1);
}


let a = parseInt(readlineSync.question('Can you give me a number please?'));

console.log(factorial(a));