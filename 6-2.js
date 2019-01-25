const readlineSync = require("readline-sync");
/**
 * A rectangle
 */
class Rectangle{
  constructor(topLeftXPos, topLeftYPos, width, length) {
    this.topLeftXPos= topLeftXPos;
    this.topLeftYPos= topLeftYPos;
    this.width= width;
    this.length= length;
  }

  /**
   * returns true only if the current rectangle collides with otherRectangle
   * @param {*} otherRectangle 
   */
  collides(otherRectangle){
    if (this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
      this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
      this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.height &&
      this.height + this.topLeftYPos > otherRectangle.topLeftYPos) {
        return true;
    }
    else{

      return false;
    }
  }
}

let rect =[];

let x=parseInt(readlineSync.question("How many rectangles would you like to create ?"));
for (let i = 0; i <= x-1; i++) {
  let topLeftXPos = parseInt(Math.floor((Math.random() * 10)+1));
  let topLeftYPos = parseInt(Math.floor((Math.random() * 10)+1));
  let width = parseInt(Math.floor((Math.random() * 10)+1));
  let length = parseInt(Math.floor((Math.random() * 10)+1));
  let p = new Rectangle(topLeftXPos, topLeftYPos, width, length);
  rect.push(p);
  for(let j=i-1;j>=0;j-- ){
    rect[i].collides(rect[j]);
  } 
}



