
const cuadrado = document.getElementById("cuadrado");
const btnRojo = document.getElementById("btnRojo");
const btnAmarillo = document.getElementById("btnAmarillo");
const btnVerde = document.getElementById("btnVerde");

// 2. evento click

// Rojo
btnRojo.addEventListener("click", function () {
    cuadrado.style.backgroundColor = "red";
});

// Amarillo
btnAmarillo.addEventListener("click", function () {
    cuadrado.style.backgroundColor = "yellow";
});

//Verde
btnVerde.addEventListener("click", function () {
    cuadrado.style.backgroundColor = "green";
});