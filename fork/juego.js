import { Nave } from "./nave.js";
import { Alien } from "./alien.js";
import { Bala } from "./bala.js";

export class Juego{
	constructor(div){
        this.puedeDisparar = true;
        this.bloqueado = false;
        this.svg = div;
        this.balas = new Array();
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
        let balas = document.getElementsByTagName("circle");
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
        },1000);
    }
        finalizarJuego(){

        }
        moverNaveDerecha(){
            this.nave.moverDerecha();
        }
        moverNaveIzquierda(){
            this.nave.moverIzquierda();
        }
        comprobarChoque(){
            this.balas.forEach((bala)=>{
                let balaPosX = bala.getPosX();
                let balaPosY = bala.getPosY();
                this.posAlien.forEach((alien)=>{
                    let alienPosX = alien.getPosX();
                    let alienPosY = alien.getPosY();
                    let anchoAlien = alien.getAncho();
                    if(balaPosY <= alienPosY && balaPosY >= alienPosY-anchoAlien){
                        if(balaPosX > alienPosX && balaPosX < alienPosX+anchoAlien){
                            this.svg.removeChild(bala.getBala());
                            this.svg.removeChild(alien.getAlien());
                            this.balas.shift();
                            //bala.getBala().setAttribute("fill","white");
                            //alien.getAlien().setAttribute("fill","white");
                        }
                    }
                });
            });
        }
        dispararNave(){
            if(this.puedeDisparar){
                let bala = new Bala(this.svg,this.nave.getNave());
                this.balas.push(bala);
                this.puedeDisparar = false;
                setTimeout(()=>{
                    this.puedeDisparar = true;
                },1000);
                let intervalo = setInterval(()=>{
                    this.posicion -= 5;
                    if(bala.getPosY() < 0){
                        //this.svg.removeChild(bala.getBala());
                        //this.balas.shift();
                        clearInterval(intervalo);
                    }
                    else{
                        bala.mover();
                        this.comprobarChoque();
                    }
                },50);
            }
            /*
            let intervalo = setInterval(()=>{
                this.posY -= 5;
                if(this.posY < 0){
                    this.svg.removeChild(this.bala);
                    clearInterval(intervalo);
                }
                else{
                    this.bala.getBala().setAttribute("cy",this.posY);
                }
            },50)
            */
        }
    }
    
