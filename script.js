"use strict";

var canvas = document.getElementById("tela");
var ctx = canvas.getContext("2d");
var x =200, y = 100, larg = 50, alt = 50;

function desenhar () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "rgb(126, 113, 138)";

    desenharRetangulo();
    desenharCirculo();
    desenharTriangulo();

    moverObjetos();

    requestAnimationFrame (desenhar);
}
requestAnimationFrame(desenhar); 


function desenharTriangulo(){
    ctx.beginPath();
    ctx.moveTo(300,100);
    ctx.lineTo(350,150);
    ctx.lineTo(250,150);
    ctx.fill();
    ctx.stroke();
}

function desenharCirculo(){
    ctx.beginPath();
    ctx.arc(200, 200, 50, 0, 1 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

function desenharRetangulo(){
    ctx.fillRect(x, y, larg, alt);
    ctx.stroke();
}

function moverObjetos(){
    document.onkeydown = function(evt){
        console.log("Nome da tecla " + evt.key +" Numero " + evt.keyCode)
        if(evt.key == "ArrowUp"){
            ctx.translate(0,-5)
        }else if(evt.key == "ArrowDown"){
            ctx.translate(0,5)
        }else if(evt.key == "ArrowLeft"){
            ctx.translate(-5,0)
        }else if(evt.key == "ArrowRight"){
            ctx.translate(5,0)
        }
    }
}