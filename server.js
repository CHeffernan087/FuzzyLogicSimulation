const express = require("express")
const app = express()
const port = 8000
const path = require("path");
let amps = "0"
let brightness = "0"
let battery = "0"
let ampsOld = 0
let brightnessOld = 0
let batteryOld = 0
let outputBrightness = 0
let outputChanged = false
let inputsChanged = "true"
app.use(express.static(__dirname + '/public'));
app.get("/", (req,res)=> {
  
    res.send({"Message": "Hello Matlab"})
})

app.get("/testAPI", (req,res) => {
   
    res.send("200")
})

app.get("/sendInputs/:amps/:battery/:brightness", (req,res) =>{
    if(amps!= req.params.amps || battery != req.params.battery || brightness != req.params.brightness ){
        ampsOld = amps
        batteryOld = battery
        brightnessOld = brightness
        amps = req.params.amps
        battery = req.params.battery
        brightness = req.params.brightness
        inputsChanged = true
    }
    res.send("200")
})

app.get("/getInputs", (req, res) => {
    res.send({
        amps,
        brightness,
        battery,
        inputsChanged
    })
})

app.get("/setOutput/:brightness",(req,res) =>{
    outputBrightness = req.params.brightness
    inputsChanged = false
    res.send("200")
})

app.get("/getOutput",(req,res) =>{
    //console.log("sending this output : ", outputBrightness)
    res.send({
        outputBrightness
    })
})

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`)
})

app.get("/gui" , (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
 })