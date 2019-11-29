import { Nave } from "./nave.js";
import { Alien } from "./alien.js";

export class Juego{
	constructor(div){
        this.bloqueado = false;
        this.svg = div;
        this.nave = new Nave(this.svg);
        this.svgx=parseInt(div.getAttribute('width'));
        this.svgy=parseInt(div.getAttribute('height'));
		this.posAlien = new Array();
        this.separacion = this.svgx/30;
		this.posY=this.separacion/2;
        this.posX=this.separacion/2;
        console.log(this.posX,this.posY);
        this.crearAliens();
        this.anchoAliens = this.posX+this.separacion*20;
        this.altoAliens = this.posY+this.separacion*6;
        this.comenzarMovimiento();
    }
    crearAliens(){
		for (let i=0;i<3;i++){
            for(let j = 0; j<10;j++){
                this.posAlien.push(new Alien(this.svg,this.separacion,this.posX,this.posY));
                this.posX += this.separacion*2;
            }
            this.posY += this.separacion*2;
            this.posX = this.separacion/2;
        }
    }

    comenzarMovimiento(){      
        let derecha = true;
        let posicionX = this.anchoAliens;
        let posicionY = this.altoAliens;
        let intervalo = setInterval(()=>{
            if(posicionY < this.svgy-this.separacion*5){
                if(!this.bloqueado){
                    if(derecha && posicionX<this.svgx-10){
                        posicionX += 10;
                        this.posAlien.forEach((alien)=>{
                            alien.moverDerecha();
                        });
                    }
                    else if(!derecha && posicionX>this.anchoAliens-10){
                        posicionX -= 10;
                        this.posAlien.forEach((alien)=>{
                            alien.moverIzquierda();
                        });
                    }
                    else{
                        this.posAlien.forEach((alien)=>{
                            alien.moverAbajo();                    
                        });
                        derecha = !derecha;
                        posicionY +=20;
                    }       
                }
                else{
                    clearInterval(intervalo);
                }
            }
            else{
                this.finalizarJuego();
            }
        },10);
    }
        /*
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
        */
        finalizarJuego(){

        }
        moverNaveDerecha(){
            this.nave.moverDerecha();
        }
        moverNaveIzquierda(){
            this.nave.moverIzquierda();
        }
        dispararNave(){
            this.nave.disparar();
        }
    }
    
