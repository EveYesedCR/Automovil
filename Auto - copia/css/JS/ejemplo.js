
var titulo= document.querySelector("h1")
titulo.addEventListener('mouseover', cambio)
function cambio(){
    titulo.style.color='#FF00FF'
}

var titulo = document.querySelector(".titulo")
var imagen1= document.querySelector(".imagen1")


titulo.addEventListener('click', MuestraImagen)

function MuestraImagen(){
  imagen1.classList.remove('oculto')  
}

