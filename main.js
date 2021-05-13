var canvas= document.getElementById("mycanvas");
ctx= canvas.getContext("2d");

var width= screen.width;
new_width= screen.width-70;
new_height= screen.height-300;
var lastposition_ofx, lastposition_ofy;

var colour= "black";
var line_width= 1;

if (width<992) {
    document.getElementById("mycanvas").width= new_width;
    document.getElementById("mycanvas").height= new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e)
{
    colour= document.getElementById("colour").value;
    line_width= document.getElementById("line_width").value;
    lastposition_ofx=e.touches[0].clientX-canvas.offsetLeft;
    lastposition_ofy=e.touches[0].clientY-canvas.offsettop;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    currentposition_ofx= e.touches[0].clientX - canvas.offsetLeft;
    currentposition_ofy= e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle= colour;
        ctx.lineWidth= line_width;
        ctx.moveTo(lastposition_ofx, lastposition_ofy);
        ctx.lineTo(currentposition_ofx, currentposition_ofy);
        ctx.stroke();
    

    lastposition_ofx= currentposition_ofx;
    lastposition_ofy= currentposition_ofy;
}

var canvas= document.getElementById("mycanvas");

ctx = canvas.getContext("2d");

var colour= "red";

ctx.beginPath();
ctx.strokeStyle= colour;
ctx.lineWidth=2;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
   colour= document.getElementById("colour.value");
   console.log(colour);

   mouse_x= e.clientX- canvas.offsetLeft;
   mouse_y= e.clientY- canvas.offsetTop;

   cricle(mouse_y, mouse_x);
}

function cricle(mouse_y, mouse_x){
   ctx.beginPath();
   ctx.strokeStyle =colour;
   ctx.lineWidth= 2;
   ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
   ctx.stroke();
}
