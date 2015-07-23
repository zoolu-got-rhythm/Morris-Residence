/*

you should really get that sorted first because it's
hard to understand/read

I don't mind helping you sort out your JS a bit but
have to take care of that first

2 initIndicators functions? checking now.


< slurp


enter working? any luck?
wow typing on the same line, causes abit of lag i think.
it is quite laggy on my side, think there's 3 of us in this session
my pc is crap aswell though so could have something to do with that.
*/
var amount;
var fire


var initIndicators = function(){

	    amount = setInterval(function() {
			indicators();
		}, 600);
	

	function indicators() {

		fire = setInterval(function() {
			incro();
		}, 100);

		var collect = []; //global scope, closed functions?

		function incro() {
			var inc = 0;

			inc++;

			
			collect.push(inc);

			var spawn = document.createElement("div"); //.setAttribute("id","imageCube");

			spawn.style.width="10px";
			spawn.style.height="10px";
			spawn.style.cssFloat="left";
			spawn.style.backgroundColor="#81d4fa";
			spawn.style.margin="10px";
			spawn.style.borderRadius="5px";

			document.getElementById("indicators").appendChild(spawn);

			if(collect.length===4) {
				clearInterval(fire);

				var dad = document.getElementById("indicators");

				//keeps going for the length of the child divs that we're created, then removes them.
				while(dad.firstChild) {
				  dad.removeChild(dad.firstChild);
					collect.length = 0;
					inc = 0;
				}

			}
		};

	}; //end of indicators function




}; //< end of initIndicators...


var killIndicators = function() { //change scope for the function to work. <here is what needs to be changed.
	clearInterval(amount);
	clearInterval(fire);
};