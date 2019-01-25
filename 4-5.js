const readlineSync = require("readline-sync");

let x1 = parseInt(readlineSync.question('Can you give me a number please?'));
let y1 = parseInt(readlineSync.question('Can you give me a number please?'));
let x2 = parseInt(readlineSync.question('Can you give me a number please?'));
let y2 = parseInt(readlineSync.question('Can you give me a number please?'));

function calcDistance(x1,y1,x2,y2){
  var dist = Math.hypot(x2-x1, y2-y1);
  return dist
}

console.log(calcDistance(x1,y1,x2,y2));