const readlineSync = require("readline-sync");

let min = readlineSync.question('Can you give me a min number please?');
let max = readlineSync.question('Can you give me a max number please?');
let current = readlineSync.question('Can you give me a number please?');

if (min>max){
  console.log("Pourquoi le poulet a-t-il traversé la rue ? Parce que tu ne l'as pas cuit bordel ! ")
}else{
  if ((min<current) && (current<max)){
    console.log(current);
  }
  else{
    console.log("Your number isn't inbetween!")
  }
}