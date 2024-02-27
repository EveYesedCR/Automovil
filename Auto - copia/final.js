var paisaje  = document.querySelector(".paisaje")
var rueda1= document.querySelector(".rueda1")
var rueda2= document.querySelector(".rueda2")
var luz= document.querySelector(".luz")
var sprite= document.querySelector(".sprite")


paisaje.addEventListener('click' , paisajeMover)


function paisajeMover(){
    paisaje.classList.add('paisajeMover')
    rueda1.classList.add("rueda1Para")
    rueda2.classList.add('rueda2Para')
    luz.classList.remove('luzOculto')
    luz.classList.add('luzMover')
    sprite.classList.remove('spriteOculto')
    sprite.classList.add('spriteMover')
}














