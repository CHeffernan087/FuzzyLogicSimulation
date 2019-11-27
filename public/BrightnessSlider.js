
class BrightnessSlider{

    constructor(xpos, ypos , height = 300){
      this.xpos = xpos
      this.ypos = ypos
      this.radius = 10
      this.drag = false
      this.colorOutput = 0
      this.initialX = xpos
      this.volts = 0
      this.height = height
      this.lux = 0;
      
    }
    
    draw(){
      this.colorOutput = map(this.xpos,this.initialX,this.initialX+this.height,0,255)
      this.volts = map(this.xpos,this.initialX,this.initialX+this.height,0,4.5)
      this.lux = map(this.xpos,this.initialX,this.initialX+this.height,0,31000)
      fill(220,220,0)
      strokeWeight(2)
      stroke(220,220,0)
      line(this.initialX,this.ypos,this.initialX+this.height,this.ypos)
      fill(255)
      strokeWeight(2)
      stroke(171, 25, 229)
      ellipse(this.xpos, this.ypos, 20,30)
      if(this.drag){
        if(mouseX < this.initialX){
          this.xpos = this.initialX
        }
        else if(mouseX > this.initialX+this.height){
          this.xpos = this.initialX+this.height
        }
        else{
          this.xpos = mouseX
        }
      }
      noStroke()
      textSize(25)
      fill(200,200,0)
   
      text(this.getLux() + " Lux", this.initialX+225, this.ypos+40)

      let angle = 270
      let radius = 10
    let numX = radius * Math.cos(this.toRadians(angle))
    let numY = radius * Math.sin(this.toRadians(angle))
    fill(0, 229, 195)
    strokeWeight(1)
    textSize(3)
    //translate(this.initialX+180+(radius/2) ,this.ypos+32.5)
    for (let i = 1; i < 13; i++) {

        angle += 30
        numX = radius * Math.cos(this.toRadians(angle))
        numY = radius * Math.sin(this.toRadians(angle)) 
        text(i, numX - 10, numY)
    }

    }
    
    clicked(x,y){
      const xClicked = x>this.xpos - this.radius && x< this.xpos+this.radius
      const yClicked = y>this.ypos - 15 && y< this.ypos+15
      if(xClicked && yClicked){
        this.drag = true
        
      }
    }
    
    release(){
      this.drag = false
    }
    
    getColor(){
      return color(this.colorOutput)
    }
    
    getOutput(){
      return this.colorOutput
    }

    getCurrent(){
      return this.volts.toFixed(3)
    }

    getLux(){
        return this.lux.toFixed(0)
    }

    toRadians(angle) {
        return angle * (Math.PI / 180);
    }

    getCircleX(r, angle){

    }

   
  }