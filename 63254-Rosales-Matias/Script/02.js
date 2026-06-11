let btnRojo = document.getElementById('btnRojo');
let btnAmarillo = document.getElementById('btnAmarillo');
let btnVerde = document.getElementById('btnVerde');
let cuadrado = document.getElementById('cuadrado');

btnRojo.addEventListener("click", function() {
    cuadrado.style.background = "red";
});

btnAmarillo.addEventListener("click", function() {
    cuadrado.style.background = "yellow";
});

btnVerde.addEventListener("click", function() {
    cuadrado.style.background = "green";
});