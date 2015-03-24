


var initIndicators = function(){ 

var amount = setInterval(function(){indicators()},600);

function indicators(){

var fire = setInterval(function(){incro()},100);

var collect = []; //global scope, closed functions?

function incro(){
var inc = 0; 


//while(inc<10){
inc++; 
//document.getElementById("count").innerHTML=collect.length; 
collect.push(inc);

var spawn = document.createElement("div"); //.setAttribute("id","imageCube");
spawn.style.width="10px"; 
spawn.style.height="10px"; 
spawn.style.cssFloat="left"; 
spawn.style.backgroundColor="#81d4fa"; 
spawn.style.margin="10px"; 
spawn.style.borderRadius="5px";
document.getElementById("indicators").appendChild(spawn);

if(collect.length===4){
clearInterval(fire);
var dad = document.getElementById("indicators");
while(dad.firstChild){ //keeps going for the length of the child divs that we're created. 
    dad.removeChild(dad.firstChild);
	collect.length = 0; 
	inc = 0; 
}

}

}; 

}; //end of indicators function

}; 

var killIndicators = function(){ //change scope for the function to work. 
	clearInterval(amount); 
	clearInterval(fire); 
}