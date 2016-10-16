var pets = 0;
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
