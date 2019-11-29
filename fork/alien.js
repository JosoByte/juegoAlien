export class Alien{
	constructor(div,ancho,posX, posY){
        this.div = div;
        this.rectangulo=document.createElementNS("http://www.w3.org/2000/svg","rect");
        this.alien = this.rectangulo;
        this.ancho = ancho;
        this.posX = posX;
        this.posY = posY;
        this.dibujar();
        //setInterval(this.moverDerecha,2000);
        this.moverDerecha();
	}
	dibujar(){
        this.rectangulo.setAttribute('x',this.posX);
        this.rectangulo.setAttribute('y',this.posY);
        this.rectangulo.setAttribute('width',this.ancho);
        this.rectangulo.setAttribute('height',this.ancho);
        this.rectangulo.setAttribute('style',"fill:rgb(0,0,0);stroke-width:3;stroke:rgb(200,0,0)");
        this.div.appendChild(this.rectangulo);
    }
    moverDerecha(){
        this.posX += 10;
        this.rectangulo.setAttribute('x',this.posX);
    }
    moverIzquierda(){
        this.posX -= 10;
        this.rectangulo.setAttribute('x',this.posX);
    }
    moverAbajo(){
        this.posY += this.ancho*2;
        this.rectangulo.setAttribute('y',this.posY);
    }
}