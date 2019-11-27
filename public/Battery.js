

class Battery{
    constructor(xpos, ypos){
        this.xpos = xpos
        this.ypos = ypos
        this.width = 150
        this.bLevelX = xpos+ 100
        this.drag = false;
        this.height = 75
        this.batteryLife = .1
        this.color = [255,0,0]
    }

    draw(){
        fill(255)
        rect(this.xpos, this.ypos, this.width, this.height)
        rect(this.xpos+this.width, this.ypos+(this.height*.25),10, this.height*.5)
        // battery life
        fill(this.color[0], this.color[1], this.color[2])
        if((this.width*this.batteryLife)-10 > 0){
            rect(this.xpos+5, this.ypos+5, (this.width*this.batteryLife)-10, this.height-10)
        }

        if(this.drag){
            if(mouseX < this.xpos){
              this.batteryLife = 0
            }
            else if(mouseX > this.xpos+this.width){
              this.batteryLife = 1
            }
            else{
              this.batteryLife = (mouseX-this.xpos) / (this.width)
               if (this.batteryLife < .2){
                this.color = [255,0,0]
                }
              else if(this.batteryLife < .60){
                  this.color = [237, 181, 14]
              }else{
                this.color = [0, 255, 0]
              }
              
            }
          }
        fill(0)
        textSize(18)
        text((this.batteryLife*100).toFixed(1) + "%", this.xpos+(this.width/3) , this.ypos+(this.height/1.75))
    }

    clicked(x,y){
     
        const xClicked = x>this.xpos && x< this.xpos+this.width
        const yClicked = y>this.ypos && y< this.ypos+height
        if(xClicked && yClicked){
          this.drag = true
          
        }
      }
      
      release(){
        this.drag = false
      }

      getBatteryPercent(){
          return this.batteryLife.toFixed(2)
      }
}