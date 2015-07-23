




var c1 = document.getElementById("face1").getContext("2d");
var c2 = document.getElementById("face2").getContext("2d");
var c3 = document.getElementById("face3").getContext("2d");
var c4 = document.getElementById("face4").getContext("2d");




var colourPicker = ["#111", "#222", "#333", "#444", "#555", "#666",
                   "#777", "#888", "#999", "#aaa", "#bbb", "#ccc", ];
var r = []; 
var r2 = [];

for(var incr=0; incr<=5; incr++){
	c1.fillStyle = colourPicker[incr];
	c2.fillStyle = colourPicker[incr];
	c3.fillStyle = colourPicker[incr];
	c4.fillStyle = colourPicker[incr];

	var random = Math.floor(Math.random()*200); 
	r.push(random); 

	var random2 = Math.floor(Math.random()*200); 
	r2.push(random2); 

    c1.fillRect(r[incr],r2[incr],r[incr],r2[incr]); 
    c2.fillRect(r[incr],r2[incr],r[incr],r2[incr]); 
    c3.fillRect(r[incr],r2[incr],r[incr],r2[incr]); 
    c4.fillRect(r[incr],r2[incr],r[incr],r2[incr]); 


}
