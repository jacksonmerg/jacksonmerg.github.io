var pets = 0;
var money = 0;
var mps = 0;
var pps = 0
var clones = 0;
var coin = 0;
var cps = 0;
$("#sell").hide();
$("#moneycount").hide();
$("#clone").hide();
$("#clonecount").hide();
$("#booth").hide();
$("#bot").hide();
$("#transmute").hide();
$("coincount").hide();
$("buy").hide();
$("sell").hide();
var savegame = JSON.parse(localStorage.getItem("save"));
if (savegame !== null){
  if (typeof savegame.money !== "undefined") money = savegame.money;
  if (typeof savegame.pets !== "undefined") pets = savegame.pets;
  if (typeof savegame.mps !== "undefined") mps = savegame.mps;
  if (typeof savegame.pps !== "undefined") pps = savegame.pps;
  if (typeof savegame.clones !== "undefined") clones = savegame.clones;
  if (typeof savegame.cps !== "undefined") cps = savegame.cps;
}
var setsave = function(){
  var save = {
    	pets:pets,
    	money: money,
    	mps: mps,
      pps:pps,
      cps:cps,
      clones:clones
    };
    localStorage.setItem("save",JSON.stringify(save));
};
var onpet = function(){
pets++;
if(pps == 0){
document.getElementById("count").innerHTML = "You have pet eddie " + String(pets)+" time(s)";
}else{
document.getElementById("count").innerHTML = "You have pet eddie " + String(pets)+" time(s) ("+pps+"/s)";
}
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
if(pets>249){
$("#bot").show();
}
if(pets>349){
$("#transmute").show();
}
if(pets>699){
$("#coincount").show();
$("#buy").show();
$("#sell").show();
}
if(pets>999){
$("#hirebreeders").show();
}
};
var transmute = function(){
money+=5;
pets--;
}
var sell = function(){
money++;
if(mps == 0){
document.getElementById("moneycount").innerHTML = "You have " + String(money)+"$";
}else{
document.getElementById("moneycount").innerHTML = "You have " + String(money)+"$ ("+mps+"/s)";
}};
var clone = function(){
clones++;
  if(pps == 0){
document.getElementById("clonecount").innerHTML = "You have " + String(pets)+" clone(s)";
}else{
document.getElementById("clonecount").innerHTML = "You have " + String(pets)+" Eddie clone(s) ("+cps+"/s)";
}
};
var buildbooth = function(){
if(money>19 && clones>0){
  clones--;
  money-=20;
  mps++;
  document.getElementById("clonecount").innerHTML = "You have " + String(clones)+" Eddie clones";
  document.getElementById("moneycount").innerHTML = "You have " + String(money)+"$ ("+mps+"/s)";
}};
var buy = function(){
if(money>0){
  money--;
  coin++;
  document.getElementById("coincount").innerHTML = "You have " + String(coin)+" eddie coin";
}};
var sell = function(){
if(coins>0){
  money++;
  coins;
  if(mps == 0){
document.getElementById("moneycount").innerHTML = "You have " + String(money)+"$";
}else{
document.getElementById("moneycount").innerHTML = "You have " + String(money)+"$ ("+mps+"/s)";
}
  document.getElementById("coincount").innerHTML = "You have " + String(coin)+" eddie coin";
}};
var buildbot = function(){
if(money>99){
  money-=100;
  pps++;
  document.getElementById("clonecount").innerHTML = "You have " + String(clones)+" Eddie clones";
  document.getElementById("moneycount").innerHTML = "You have " + String(money)+"$ ("+mps+"/s)";
}};
var hirebreeder = function(){
if(eddiecoin>99 && clones>0){
  eddiecoin-=100;
  clones--;
  cps++;
  document.getElementById("clonecount").innerHTML = "You have " + String(clones)+" Eddie clones";
}};
var onTick = function(){
  money+=mps
  if(mps == 0){
document.getElementById("moneycount").innerHTML = "You have " + String(money)+"$";
}else{
document.getElementById("moneycount").innerHTML = "You have " + String(money)+"$ ("+mps+"/s)";
}
  pets+=pps
  if(pps == 0){
document.getElementById("count").innerHTML = "You have pet eddie " + String(pets)+" time(s)";
}else{
document.getElementById("count").innerHTML = "You have pet eddie " + String(pets)+" time(s) ("+pps+"/s)";
}
clones+=cps
  if(pps == 0){
document.getElementById("count").innerHTML = "You have pet eddie " + String(pets)+" time(s)";
}else{
document.getElementById("count").innerHTML = "You have pet eddie " + String(pets)+" time(s) ("+pps+"/s)";
}}
setInterval("onTick()", 1000);
