import{Nave} from "./nave.js";
import{Alien} from "./alien.js";
import{Bala} from "./bala.js";

class AlienPositions{
	constructor(){
		this.svg=document.getElementById("juego");
		this.svgx=document.getElementById("juego").getAttribute('width');
		this.posAlien = new Array();
		this.posY=0
		this.posX=0
    	this.svg.setAttribute('width',this.svgx);

		for (this.i=0;this.i<30;this.i++){
			this.posAlien[this.i]=new Alien();
			if (this.posX==this.svgx-50){
				this.posX=0;
				this.posY+=50;
			}
			this.posX+=50;
			this.posAlien[this.i].x=this.posX;
			this.posAlien[this.i].y=this.posY;
			this.svg.appendChild(this.posAlien[this.i].rectangulo);
			this.posAlien[this.i].cargarPos();
			}
		}
	}
var balas = new Array();
window.onload = ()=>{
    let juego = document.getElementById("juego");
    var positions = new AlienPositions();
    var nave = new Nave(juego);
    var aliens=document.body.appendChild(positions.svg)
    for (var i=0;i<balas.length;i++){
    	balas[i].y+=1
    	balas[i].cargarPos();
    }
    document.addEventListener("keydown",(event)=>{
        if(event.keyCode == 37){
            nave.moverDerecha();
        }
        else if(event.keyCode == 39){
            nave.moverIzquierda();
        }
        else if(event.keyCode == 32){
            balas[balas.length+1]=new Bala(nave.getX(),nave.getY());
            document.body.appendChild(balas[balas.length].rectangulo);
        }
    });
}
