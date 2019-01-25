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
multiRand(n);

function average(arr){
  let result=0;
  for (let elem of arr) {
    result += elem;
    }
  result /= arr.length;
  return result;
}

function min(arr){
  var min = Math.min.apply(null, arr);
  return min;
}

function max(arr){
  var max = Math.max.apply(null, arr);
  return max;
}
console.log(min(arr));
console.log(max(arr));
console.log(average(arr));