const readlineSync = require("readline-sync");

let name = readlineSync.question('Can you give me your name please?');
let firstname = readlineSync.question('Can you give me your first name please?');
let city = readlineSync.question('Can you give me your city please?');



console.log("Your name is "+name+" "+firstname+ " and you live in "+city+".");