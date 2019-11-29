export class Alien{
	constructor(){
		var alien = this.patata;
		this.x=0;
		this.y=0;
		this.alive=true;
		this.canShoot=true;
		this.rectangulo=document.createElementNS("http://www.w3.org/2000/svg","rect");
        this.rectangulo.setAttribute('x',this.x);
        this.rectangulo.setAttribute('y',this.y);
        this.rectangulo.setAttribute('width',10);
        this.rectangulo.setAttribute('height',10);
        this.rectangulo.setAttribute('style',"fill:rgb(0,0,0);stroke-width:3;stroke:rgb(200,0,0)");
	}
	cargarPos(){
		this.rectangulo.setAttribute('x',this.x);
        this.rectangulo.setAttribute('y',this.y);
	}
}
window.onload= ()=>{
    var svg1= new Juego();
    juegoCaja=document.body.appendChild(svg1.svg);

}