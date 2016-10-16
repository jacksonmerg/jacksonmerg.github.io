var pets = 0
; 
var onpet = function(){
    
pets++;

document.getElementById("count").innerHTML = "You have pet eddie " + String(pets)+" time(s)";


};