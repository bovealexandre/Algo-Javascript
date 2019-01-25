const readlineSync = require("readline-sync");

let day = readlineSync.question('Can you give me a number between 1 and 7 please?');
day = parseInt(day);

if (day===1){
  console.log("monday");
}
else if (day===2){
  console.log("Tuesday");
}
else if (day===3){
  console.log("Wednesday");
}
else if (day===4){
  console.log("Thirsday");
}
else if (day===5){
  console.log("Friday");
}
else if (day===6){
  console.log("Saturday");
}
else if (day===7){
  console.log("Sunday");
}