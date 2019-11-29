# FuzzyLogicSimulation
A processing sketch to visualize a Fuzzy inference System which I designed with Conor Evans and Simon Ghose.
The input variables: 
 - ambient brightntess
 - charging level
 - battery level <br />
 can be toggled using the GUI and the defuzzified output is shown on the phone screen.
<p align="center">
<img src="https://dl.dropboxusercontent.com/s/ne0vcg35yewlx2a/Screenshot%202019-11-29%20at%2011.36.59.png?dl=0" alt="drawing" width="300"/>
</p>

### Opening the GUI
1. clone this repo `$ git clone https://github.com/CHeffernan087/FuzzyLogicSimulation.git`
2. cd to the directory in your command line
3. run `$ npm install`
4. run `$ npm start`
5. The GUI is now running in a local node server on [http://localhost:8000/gui](https://github.com/CHeffernan087/FuzzyLogicSimulation.git). Visit this url in your browser to see the GUI

### Running the Fuzzy Controller in Matlab
1. In the folder where you have cloned this repo find the `fuzzifyNodeInputs.m` file.
2. Open this file in Matlab (you may have to select `Add Path` when you open this file in Matlab)
3. Run the fuzzy controller by hitting `Run` on the `fuzzifyNodeInputs` file
4. Toggling the input values in the GUI now will result in the output on the GUI changing per a response from the Fuzzy Controller
