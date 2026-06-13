var btnCambiar=document.getElementById("btnCambiar")
var titulo=document.getElementById("titulo")

btnCambiar.addEventListener("click",function(){
    titulo.textContent="Titulo cambiado"
    titulo.style.background="navy"
})


//punto 2
var cuadrado=document.getElementById("cuadrado")
var btnrojo=document.getElementById("rojo")
var btnamarillo=document.getElementById("amarillo")
var btnverde=document.getElementById("verde")

btnrojo.addEventListener("click",function(){
    cuadrado.style.background="red"
})

btnamarillo.addEventListener("click",function(){
    cuadrado.style.background="yellow"
})
btnverde.addEventListener("click",function(){
    cuadrado.style.background="green"
    cuadrado.textContent="ACELEREEEEEEEEEEEEEEE"
})