const readlineSync = require("readline-sync");

function askTVSerie(){
  let s = readlineSync.question("What's your favorite serie?");
  let y = parseInt(readlineSync.question("In which year was it produced?"));
  let a = [];
  let r =1;
  for (let i = 0; parseInt(r) != 0; i++) {
    r = readlineSync.question("Who are the actors? (0 to exit)");
    if (parseInt(r)!=0){a.push(r)};
  }
  let tvSerie = new Object();
  tvSerie.nom= s ;
  tvSerie.year= y ;
  tvSerie.actors= a ;
  return tvSerie;
};
console.log(JSON.stringify(askTVSerie()));