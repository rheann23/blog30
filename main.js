var mouseEvent = "empty";


canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
width_of_the_line = 1;

canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value;
    width_of_the_line = document.getElementById("width_of_the_line").value;

    mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e){

    current_position_of_mouse_x = e.clientx - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientx - canvas.offsetTop;

    if (mouseEvent == "mouseDown"){

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_the_line;
        
         ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,40,0,2*Math.PI);
           

          
          ctx.stroke();
    }
    
    
}
canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseUP";
}
canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}