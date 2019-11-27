
i = 3000;

while(i > 0)
    params = webread("http://localhost:8000/getInputs");
   
    brightness = str2num(params.brightness);
    changed = params.inputsChanged;
    changed = strcmp(changed,'true'); 
    if(brightness < 1)
        brightness = 1;
    end 
    %if(changed == true)
    inputs = [log10(brightness),str2num(params.battery)*100,str2num(params.amps)];
    output = evalfis(Fuzzify,inputs);
    outputUrl = "http://localhost:8000/setOutput/" + output;
    webread(outputUrl);
       
        
   % end
    disp(i)
    pause(.15)
    i = i-1;
end

disp("The programme has finished")