
class Phone{
     
    constructor(xpos, ypos){
        this.xpos = xpos;
        this.ypos = ypos;
        this.bezel = 30
        this.color = 255
        this.nits = 0
    }
    
    draw(){
        fill(0)
        strokeWeight(1)
        stroke(255)
        rect(this.xpos, this.ypos, 240, 400, 30)
        
        noStroke()
        fill(this.color)
        rect(this.xpos+ (this.bezel/2), this.ypos+ (this.bezel/2), 240- this.bezel, 400- this.bezel, 10)
        
        fill(0)
        rect(this.xpos + 80, this.ypos+8, 80,30,10)

        stroke(0)
        
        if(this.color > 128){
            fill(0)
            noStroke()
        }
        else{
            strokeWeight(2)
            fill(255)
        }
        
        text(this.nits + " Nits",this.xpos+80 ,this.ypos + 200)
    }

    updateColor(color){
        this.color = color;
    }

    updateNits(nits){
        this.nits = nits
    }
}