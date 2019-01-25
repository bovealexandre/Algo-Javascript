const readlineSync = require("readline-sync");
function rand10(){
  var rand = parseInt(Math.floor((Math.random() * 10)+1));
  return rand;
}

console.log (rand10()); 