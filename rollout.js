
var tally = 0; //when this global was named i it had a value of 29, suggesting that it was sharing a variable's value from another script. 
 










var rollText = function(){ //use onload and onmouseout to reset the text roll-outs.


 var pHidden1 = document.getElementById("roll1");
var pHidden2 = document.getElementById("roll2");
var pHidden3 = document.getElementById("roll3");
var pHidden4 = document.getElementById("roll4");





pHidden1.style.visibility="hidden";
pHidden2.style.visibility="hidden";
pHidden3.style.visibility="hidden";
pHidden4.style.visibility="hidden";



var bubble1 = document.getElementById("speechBubble1");
bubble1.style.visibility="hidden"; 

var bubble2 = document.getElementById("speechBubble2");
bubble2.style.visibility="hidden"; 

var bubble3 = document.getElementById("speechBubble3");
bubble3.style.visibility="hidden"; 

var bubble4 = document.getElementById("speechBubble4");
bubble4.style.visibility="hidden"; 




};






var rollTextOut = function(x){ //make re-usable for all roll-outs. 

 var pHidden1 = document.getElementById("roll1");
 textGrab1 = pHidden1.innerHTML; //referenced the original text before it gets set to invisible.   

  var pHidden2 = document.getElementById("roll2");
 textGrab2 = pHidden2.innerHTML; //referenced the original text before it gets set to invisible.  

  var pHidden3 = document.getElementById("roll3");
 textGrab3 = pHidden3.innerHTML; //referenced the original text before it gets set to invisible.  

  var pHidden4 = document.getElementById("roll4");
 textGrab4 = pHidden4.innerHTML; //referenced the original text before it gets set to invisible.  


var animate = setInterval(function(){sequence()}, 30);
	
function sequence(){

  tally++; 
	
 if(x===1){

 	   var bubble1 = document.getElementById("speechBubble1");
     bubble1.style.visibility="visible"; 
 		
 	   var pHidden1 = document.getElementById("roll1");
     pHidden1.style.background="#fff";
     pHidden1.style.zIndex="2";
     pHidden1.style.visibility="visible";
     pHidden1.style.padding = "5px"; 
     pHidden1.style.borderRadius = "10px"; 
     pHidden1.style.borderBottom = "2px solid #ccc"; 
     
    
   
    document.getElementById("examination").innerHTML = textGrab1.length; 
    pHidden1.innerHTML = textGrab1.substring(0, tally);
    //mrMorris.substring(0, tally);
 
     
     
 }
 else if(x===2){

   var bubble2 = document.getElementById("speechBubble2");
bubble2.style.visibility="visible"; 

   varpHidden2 = document.getElementById("roll2");
    pHidden2.style.background="#fff";
    pHidden2.style.zIndex="2";
    pHidden2.style.visibility="visible";
    pHidden2.style.padding = "5px"; 
    pHidden2.style.borderRadius = "10px"; 
    pHidden2.style.borderBottom = "2px solid #ccc"; 
     
    
   
    
   pHidden2.innerHTML = textGrab2.substring(0, tally);
 }

  else if(x===3){

     var bubble3 = document.getElementById("speechBubble3");
bubble3.style.visibility="visible"; 

 	   var pHidden3 = document.getElementById("roll3");
     pHidden3.style.background="#fff";
     pHidden3.style.zIndex="2";
     pHidden3.style.visibility="visible";
     pHidden3.style.padding = "5px"; 
     pHidden3.style.borderRadius = "10px"; 
     pHidden3.style.borderBottom = "2px solid #ccc"; 
     
    
   
   
    pHidden3.innerHTML = textGrab3.substring(0, tally);
 }

  else{

    var bubble4 = document.getElementById("speechBubble4");
bubble4.style.visibility="visible"; 

   var pHidden4 = document.getElementById("roll4");
     pHidden4.style.background="#fff";
     pHidden4.style.zIndex="2";
     pHidden4.style.visibility="visible";
     pHidden4.style.padding = "5px"; 
     pHidden4.style.borderRadius = "10px"; 
     pHidden4.style.borderBottom = "2px solid #ccc"; 
     
    
   
   
    pHidden4.innerHTML = textGrab4.substring(0, tally);
 }



//phidden1.subString(0,5); 
     if(tally===textGrab1.length){ 
       clearInterval(animate); //make global scoped. 
       tally=0; 
    
      }

     


};

};