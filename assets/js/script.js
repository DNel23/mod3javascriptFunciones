const ele = document.getElementById("ele1")
ele.addEventListener("click", function(){pintar('yellow')});
function pintar(color){
    ele.style.backgroundColor = color
} 