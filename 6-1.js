const readlineSync = require("readline-sync");

class Circle{
  constructor(circleName,xPos, yPos, radius) {
    this.circleName=circleName;
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
  }
  move(xOffset, yOffset) {
    this.xPos += xOffset;
    this.yPos += yOffset;
  }
  get surface(){
    let surface = Math.PI * (this.radius ** 2);
    return surface;
  }
}

xOffset = readlineSync.question("Tell me a number");
yOffset = readlineSync.question("tell me a number");

new Circle("Circle1",5,5,5).move(xOffset,yOffset);
new Circle("Circle1",5,5,5).surface;