var pets = 0;
var money = 0;
$("#sell").hide();
$("#moneycount").hide();
var onpet = function(){
pets++;
document.getElementById("count").innerHTML = "You have pet eddie " + String(pets)+" time(s)";
if(pets>29){
$("#sell").show();
$("#moneycount").show();
}
};
var sell = function(){
money++;
document.getElementById("moneycount").innerHTML = "You have " + String(money)+"$";
}
