class CurrentGenerator{

    constructor(xpos, ypos , height = 300){
      this.xpos = xpos
      this.ypos = ypos+height
      this.radius = 3
      this.drag = false
      this.colorOutput = 0
      this.initialY = ypos
      this.lux = 0
      this.height = height
      this.current = 0
      
    }
    
    draw(){
      this.colorOutput = map(this.ypos,this.initialY,this.initialY+this.height,0,255)
      this.lux = map(this.ypos,this.initialY,this.initialY+this.height,0,32000)
      this.current = map(this.ypos,this.initialY,this.initialY -this.height,0,3) +3
      strokeWeight(2)
      stroke(20,230,230)
      line(this.xpos,this.initialY,this.xpos,this.initialY+this.height)
      fill(255 - this.getOutput())
      strokeWeight(2)
      stroke(0, 229, 195)
      ellipse(this.xpos, this.ypos, this.radius*2,this.radius*2)
      if(this.drag){
        if(mouseY < this.initialY){
          this.ypos = this.initialY
        }
        else if(mouseY > this.initialY+this.height){
          this.ypos = this.initialY+this.height
        }
        else{
          this.ypos = mouseY
        }
      }

      for(let i =0; i< 10;i++){
          line(this.xpos+8, this.initialY +((this.height/10)*i), this.xpos+13 , this.initialY+((this.height/10)*i))
      }
      textSize(8)
      fill(0, 255, 255)
      noStroke()
      text("3 A",this.xpos+20,this.initialY)
      text("0 A",this.xpos+20,this.initialY+this.height)
     
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

    getLux(){
        return this.lux.toFixed(2);
    }

    getCurrent(){
        return (this.current).toFixed(2);
    }
  }