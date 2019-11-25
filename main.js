import{Nave} from "./nave.js";

window.onload = ()=>{
    let juego = document.getElementById("juego");
    var nave = new Nave(juego);

    document.addEventListener("keydown",(event)=>{
        if(event.keyCode == 37){
            nave.moverDerecha();
        }
        else if(event.keyCode == 39){
            nave.moverIzquierda();
        }
    });
}
