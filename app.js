const canvas = document.getElementById("Jscanvas");
const ctx=canvas.getContext("2d");
const color=document.getElementsByClassName("jsColors");
const range=document.getElementById("Jsthickness");
const mode=document.getElementById("jsMode");
const save=document.getElementById("jsSave");

const INITIAL_COLOR="#000000";

canvas.width=700;
canvas.height=700;


ctx.fillStyle="white";
ctx.fillRect(0,0,canvas.width, canvas.height);

ctx.strokeStyle=INITIAL_COLOR;
ctx.fillStyle=INITIAL_COLOR;
ctx.lineWidth=2.5;

let painting = false;
let filling = false;

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


function changeColorOnClick(event){
    const color=event.target.style.backgroundColor;
    ctx.strokeStyle= color;
    ctx.fillStyle=color;
}

function handleRangeChange(event){
    ctx.lineWidth=event.target.value;
}

function handleModeClick(){
    if(filling){
        filling=false;
        mode.innerText="Fill";
    }
    else{
        filling=true;
        mode.innerText="Paint";
    }
}

function handleCanvasClick(){
    if(filling){
        ctx.fillRect(0,0,canvas.width, canvas.height);
    }
}

function handleSaveClick(){
    const image=canvas.toDataURL("image/jpeg")
    const link=document.createElement("a");
    link.href=image;
    link.download="PaintJs";
    link.click();
}

if(canvas){
    canvas.addEventListener("mousemove",onMouseMove)
    canvas.addEventListener("mousedown", startPainting)
    canvas.addEventListener("mouseleave",stop_painting)
    canvas.addEventListener("mouseup",stop_painting);
    canvas.addEventListener("click",handleCanvasClick);
}

Array.from(color).forEach(color => 
    color.addEventListener("click",changeColorOnClick)
);

if(range){
    range.addEventListener("change",handleRangeChange);
}

if(mode){
    mode.addEventListener("click",handleModeClick);
}

if(save){
    save.addEventListener("click",handleSaveClick);
}