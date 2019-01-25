const readlineSync = require("readline-sync");

let number = readlineSync.question('Can you give me your favorite number please?');

while (number !=42){
  number = readlineSync.question('Are you sure?');
}