document.addEventListener("keydown", function(event) {
// Comprobamos si la tecla presionada es "A" o "a"
var color
if (event.key === "a" || event.key === "A") {
   color='pink'    
   pinta(color,"key") 
} else if (event.key === "s" || event.key === "S") {
    color='orange'
    pinta(color,"key")
} else if (event.key === "d" || event.key === "D"){
    color='lightblue'
    pinta(color,"key")
} else if (event.key === "q" || event.key === "Q"){
    color='purple'
    agregarElemento(color,"contenedordiv")
} else if (event.key === "w" || event.key === "W"){
    color='gray'
    agregarElemento(color,"contenedordiv")
} else if (event.key === "e" || event.key === "E"){
    color='brown'
    agregarElemento(color,"contenedordiv")
}
});

function pinta(color1,IdElement){
    contenedor=document.getElementById(IdElement)
    contenedor.style.backgroundColor = color1
} 
function agregarElemento(color2,IdElemento) {
    contenedor1 = document.getElementById(IdElemento);
    nuevoElemento = document.createElement("div");
    nuevoElemento.style.width = '200px'
    nuevoElemento.style.height = '200px'
    nuevoElemento.style.backgroundColor = color2
    contenedor1.appendChild(nuevoElemento);
    
}