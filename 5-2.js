const readlineSync = require("readline-sync");

function randomizeCast(tvserie){
  var ctr = a.length, temp, index;

      while (ctr > 0) {
          index = Math.floor(Math.random() * ctr);
          ctr--;
          temp = a[ctr];
          a[ctr] = a[index];
          a[index] = temp;
      }
      return a;
}

function askTVSerie(){

  let s = readlineSync.question("What's your favorite serie?");
  let y = parseInt(readlineSync.question("In which year was it produced?"));
  let a = [];
  for (let i = 0; i < 4; i++) {

    let r = readlineSync.question("Who are the actors?");
    a.push(r);
  }
  let tvSerie = new Object();
  tvSerie.nom= s ;
  tvSerie.year= y ;
  tvSerie.actors= a ;
  randomizeCast(tvserie);
  return tvSerie;
};



console.log(JSON.stringify(askTVSerie()));

/* function askTVSerie(){
  var TVSerie = new Object();
  TVSerie.nom= s ;
  TVSerie.year= y ;
  TVSerie.actors= a ;
  function randomizeCast(TVSerie){
    var ctr = a.length, temp, index;
  
        while (ctr > 0) {
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = a[ctr];
            a[ctr] = a[index];
            a[index] = temp;
        }
        return a;
  }
  randomizeCast(TVSerie);
  var string = JSON.stringify(TVSerie);
  console.log(JSON.parse(string));
};




let s = readlineSync.question("What's your favorite serie?");
let y = parseInt(readlineSync.question("In which year was it produced?"));
var a = [];

for (let i = 0; i < 4; i++) {

  let r = readlineSync.question("Who are the actors?");
  a.push(r);
}

askTVSerie();*/
