//your JS code here. If required.
var w = window.innerWidth;
var h = window.innerHeight;

const h1 = document.getElementById("sizeInfo");
window.onresize = function(){
    w = window.innerWidth;
    h = window.innerHeight;
    h1.innerText = "Width: "+w +" and "+"Height:"+" "+h;
    
}