var pets = 0;
var money = 0;
var mps = 0;
var clones = 0;
$("#sell").hide();
$("#moneycount").hide();
$("#clone").hide();
$("#clonecount").hide();
$("#booth").hide();
var savegame = JSON.parse(localStorage.getItem("save"));
  if (savegame !== null){
  if (typeof savegame.money !== "undefined") money = savegame.money;
  if (typeof savegame.pets !== "undefined") money = savegame.pets;
  if (typeof savegame.mps !== "undefined") money = savegame.mps;
  if (typeof savegame.clones !== "undefined") money = savegame.clones;
};
var setsave = function(){
  var save = {
    	pets:pets,
    	money: money,
    	mps: mps,
      clones:clones
    }
    localStorage.setItem("save",JSON.stringify(save));}
var onpet = function(){
pets++;
document.getElementById("count").innerHTML = "You have pet eddie " + String(pets)+" time(s)";
if(pets>29){
$("#sell").show();
$("#moneycount").show();
}
if(pets>99){
$("#clone").show();
$("#clonecount").show();
}
if(pets>199){
$("#booth").show();
}
};
var sell = function(){
money++;
if(mps == 0){
document.getElementById("moneycount").innerHTML = "You have " + String(money)+"$";
}else{
document.getElementById("moneycount").innerHTML = "You have " + String(money)+"$ ("+mps+"/s)";
}};
var clone = function(){
clones++;
document.getElementById("clonecount").innerHTML = "You have " + String(clones)+" Eddie clones";
};
var buildbooth = function(){
if(money>19 && clones>0){
  clones--;
  money-=20;
  mps++;
  document.getElementById("clonecount").innerHTML = "You have " + String(clones)+" Eddie clones";
  document.getElementById("moneycount").innerHTML = "You have " + String(money)+"$ ("+mps+"/s)";
}};
var onTick = function(){
  money+=mps
  if(mps == 0){
document.getElementById("moneycount").innerHTML = "You have " + String(money)+"$";
}else{
document.getElementById("moneycount").innerHTML = "You have " + String(money)+"$ ("+mps+"/s)";
}}
setInterval("onTick()", 1000);
