const canvas = document.getElementById("Jscanvas");
const ctx=canvas.getContext("2d");

canvas.width=700;
canvas.height=700;

ctx.strokeStyle="#000000";
ctx.lineWidth=2.5;


let painting = false;

function stop_painting(){
    painting=false
}

function startPainting(){
    painting=true;
}


function onMouseMove(event){
    const x=event.offsetX;
    const y=event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    }
    else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}
function onMouseDown(event){
    painting=true;
}

function onMouseUp(event){
    painting=false;
}


if(canvas){
    canvas.addEventListener("mousemove",onMouseMove)
    canvas.addEventListener("mousedown", startPainting)
    canvas.addEventListener("mouseleave",stop_painting)
    canvas.addEventListener("mouseup",stop_painting)
}