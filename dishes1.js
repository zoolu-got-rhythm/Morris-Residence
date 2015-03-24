//global declarations. 
var dad = document.getElementById('dishes'); 

var onOff = true; //change the boolean values for on and off functionality. 


var boxs = new Array(); 
var weekDay = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun", "Mon", "Tues", "Wed"];
var dayType = ["st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th", "st"];

var up = 0; 
var i = 0; 

var d = new Date(); //think of it in the same way as an object consructor. 
today = d.getDate();
month = d.getMonth(); 
year = d.getYear(); 

//document.getElementById("monthAndYear").innerHTML = "it's currently" + " " + month + " " + "in the year of" + " " + year;

var init = function(){ //initializer function
  
var anim = setInterval(function(){grid()}, 40); 


function grid(){
 if(onOff === true){ 
             //document.getElementById('count').innerHTML=onOff;

  
 while(i<28){ //instantly creates x number of boxes
  i++; 
   
   
var box = document.createElement("div");
box.style.width = "35px"; 
box.style.borderRadius = "5px"; 
box.style.height = "35px"; 
box.style.cssFloat = "left"; 
box.style.background = "#fff"; 
box.style.margin = "10px"; 
box.style.padding = "5px";   
box.style.borderBottom = "2px solid #bbb";  
box.style.color = "#333";   
box.style.fontFamily = "Roboto"; 
document.getElementById("dishes").appendChild(box); //appends the children
}
  
up++; //increment each interval
  
var spawns = document.getElementById("dishes").childNodes[up]; //warps exsisting box's 1 by 1 everytime the function is called.
spawns.style.width = "103px";  
spawns.innerHTML = up + dayType[up-1] +"\n" + "of" + " " + "Mar:"; //because an array starts at 0 we -1 when accessing the index root of an array.
//spawns.innerHTML = weekDay[up-1]; 
   
  
  
 document.getElementById("dishes").childNodes[today].style.color = "#333";  
  
  document.getElementById("dishes").childNodes[today].style.background = "#ddd"; 
  
  
   
   if(up===i){
      onOff = false;
     clearInterval(anim);  
     
     
     //alert(onOff);                       
   }
   
  
          
//end of on switch 
 }/*else{
             //alert(onOff);  
    
              
              up--; //decrement each interval
            
                  
           //document.getElementById('count').innerHTML=onOff; 
   
            dad.removeChild(dad.childNodes[up+1]);
            
           
            //remove children. 
            
            if(up===0){
              onOff = true;
             clearInterval(anim);  
              //return; 
              
            } 
          
            
      
           
            
                                       
      
            
            
            
            
 }*/
  
}; //end of grid function  
  
 
  
};












