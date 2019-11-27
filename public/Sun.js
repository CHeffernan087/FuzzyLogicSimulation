
const toRadians = (angle) => {
  return angle * (Math.PI / 180);
}

class Sun {

  constructor(xpos, ypos, diameter) {
    this.diameter = diameter
    this.xpos = xpos
    this.ypos = ypos
    this.lineSize = this.diameter /4
    this.color = [20,20,0]
  }

  draw() {
    
    
    
    fill(this.color[0],this.color[1],this.color[2])
    stroke(this.color[0],this.color[1],0)
    ellipse(this.xpos, this.ypos, this.diameter*.6)
    
    let angle = 270
    let numX = this.diameter * Math.cos(toRadians(angle)) + this.xpos
    let numY = this.diameter * Math.sin(toRadians(angle)) + this.ypos
    
    const radius = (this.diameter)/2
    for (let i = 1; i < 13; i++) {

      angle += 30
      numX = (radius+4) * Math.cos(toRadians(angle))+ this.xpos
      numY = (radius+4) * Math.sin(toRadians(angle))+ this.ypos
      const numX2 = (radius +this.lineSize) * Math.cos(toRadians(angle)) + this.xpos
      const numY2 = (radius + this.lineSize) * Math.sin(toRadians(angle)) + this.ypos
      strokeWeight(2)
      line(numX, numY, numX2, numY2)
    }
  }
  setColor(color){
    this.color = color
  }
}