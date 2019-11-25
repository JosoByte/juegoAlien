class Nave{
    constructor(div){
        this.div = div;
        this.anchoDiv = parseInt(div.getAttribute("width"));
        this.ancho = this.anchoDiv*0.05;
        this.posy = parseInt(div.getAttribute("height"))-5-this.ancho;
        this.posx = this.anchoDiv/2;
        this.nave = this.dibujarNave();
    }

    dibujarNave(){
        let nave = document.createElementNS("http://www.w3.org/2000/svg","rect");
        nave.setAttribute("x",this.posx);
        nave.setAttribute("y",this.posy);
        nave.setAttribute("width",this.ancho);
        nave.setAttribute("height",this.ancho);
        nave.setAttribute("fill","black");
        nave.setAttribute("stroke-width",8);
        nave.setAttribute("stroke","black");
        console.log(this.div);
        console.log(nave);
        this.div.appendChild(nave);
        return nave;
    }
}

let juego = document.getElementById("juego");
var nave = new Nave(juego);