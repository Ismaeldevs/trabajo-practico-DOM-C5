const btnRojo = document.getElementById("btnRojo");
const btnVerde = document.getElementById("btnVerde");
const btnAmarillo = document.getElementById("btnAmarillo");
const cuadrado = document.getElementById("cuadrado");

btnRojo.addEventListener("click", () => {
    cuadrado.style.backgroundColor = "red";
})

btnVerde.addEventListener("click", () => {
    cuadrado.style.backgroundColor = "green";
})

btnAmarillo.addEventListener("click", () => {
cuadrado.style.backgroundColor = "yellow";
})