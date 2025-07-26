let canvas=document.getElementById('canvas')
let cvs=canvas.getContext("2d")
let UNIT=25
let WIDTH=canvas.width
let HEIGHT=canvas.height
let foodx=0
let foody=0
let xvel=UNIT
let yvel=0
let score=0
let snakepic=[
    {x:UNIT*3,y:0},
    {x:UNIT*2,y:0},
    {x:UNIT,y:0},
    {x:0,y:0}]
gamestart()
window.addEventListener("keydown",(e)=>{
let {key}=e
if(key=="ArrowRight"){
    if(xvel!==-UNIT){
xvel=UNIT
yvel=0
    }

}else if(key=="ArrowLeft"){
    if(xvel!==UNIT){
xvel=-UNIT
yvel=0
    }

}
else if(key=="ArrowUp"){
    if(yvel!==UNIT){
xvel=0
yvel=-UNIT
    }

}
else if(key=="ArrowDown"){

        if(yvel!==-UNIT){
xvel=0
yvel=UNIT
    }

}
})
function gamestart(){
   cvs.fillStyle = 'skyblack';
      cvs.fillRect(0,0,500,500)
      createfood()
      nextsecond()
     
}
function nextsecond(){
    snakepic.unshift({x:snakepic[0].x+xvel,y:snakepic[0].y+yvel})
    snakepic.pop()
    // console.log(snakepic);
    
setTimeout(() => {
    gameboardclear()
     displayfood()
      checkeatfood()
      snake()
gameover()
      
}, 150);
}

function gameboardclear(){
       cvs.fillStyle = 'skyblue';
      cvs.fillRect(0,0,500,500)
}
function createfood(){
 foodx=Math.floor(Math.random()*WIDTH/UNIT)*UNIT
 foody=Math.floor(Math.random()*HEIGHT/UNIT)*UNIT

}

function displayfood(){
cvs.fillStyle = 'white';
cvs.fillRect(foodx,foody,UNIT,UNIT)
}

function snake(){
    cvs.fillStyle = 'white';

snakepic.forEach((pic)=>{
cvs.fillRect(pic.x,pic.y,UNIT,UNIT)
cvs.strokeRect(pic.x,pic.y,UNIT,UNIT)
})

}
function checkeatfood(){
    if(foodx==snakepic[0].x&&foody==snakepic[0].y){
  snakepic.unshift({x:snakepic[0].x,y:snakepic[0].y})
       scoreadd()
        createfood()
        displayfood()
    }
        
  
}
let gameovermsg=document.getElementById('govermsg')
function gameover(){

    if(snakepic[0].x==500||snakepic[0].y==500||snakepic[0].x==-UNIT||snakepic[0].y==-UNIT){
gameovermsg.style.display="flex"
document.getElementById('scoreshowgo').innerHTML=score
    }
    else{
nextsecond()
    }
    
   
    
}

function scoreadd(){
    score++
document.getElementById('res').innerHTML=score
}

let refresh=document.getElementById('refresh')
refresh.addEventListener("click",()=>{
  location.reload()
})

function upmove(){
    if(yvel!==UNIT){
xvel=0
yvel=-UNIT
    }
}
function downmove(){
      if(yvel!==-UNIT){
xvel=0
yvel=UNIT
    }
}
function leftmove(){
     if(xvel!==UNIT){
xvel=-UNIT
yvel=0
    }
}
function rightmove(){
      if(xvel!==-UNIT){
xvel=UNIT
yvel=0
    }
}