var pets = 0;
var money = 0;
var mps = 0;
var clones = 0;
$("#sell").hide();
$("#moneycount").hide();
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
document.getElementById("clonecount").innerHTML = "You have " + String(pets)+" Eddie clones";
};
var buildbooth = function(){
if(money>19){
  clones--;
  money-=20;
  mps++;
  document.getElementById("clonecount").innerHTML = "You have " + String(pets)+" Eddie clones";
  document.getElementById("moneycount").innerHTML = "You have " + String(money)+"$ ("+mps+"/s)";
}};
var onTick = function(){
  money+=mps
  if(mps == 0){
document.getElementById("moneycount").innerHTML = "You have " + String(money)+"$";
}else{
document.getElementById("moneycount").innerHTML = "You have " + String(money)+"$ ("+mps+"/s)";
}}
setInterval("onTick()", 3000);
