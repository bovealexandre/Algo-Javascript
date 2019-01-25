const readlineSync = require("readline-sync");

let n = parseInt(readlineSync.question('Can you give me a number please?'));
function rand10(){
  var rand = parseInt(Math.floor((Math.random() * 10)+1));
  return rand;
}

let arr=[];

function multiRand(n){
  for(let i=1; i<=n;i++){
    let o = rand10();
    arr.push(o);
  }
  return arr;
}





console.log (multiRand(n));