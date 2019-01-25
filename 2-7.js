const readlineSync = require("readline-sync");

let n = readlineSync.question('Can you give me a number please?');

let i=1;

let result=0;
result= parseInt(result);

while (i <= n) {
  let y = readlineSync.question('Can you give me a number please?');
  y = parseInt(y)
  result +=y;

  i += 1;
}

console.log(result);