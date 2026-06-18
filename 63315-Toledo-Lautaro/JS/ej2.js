const cuadrado = document.getElementById("cuadrado");

document.getElementById("btnRojo").addEventListener("click", () => {
    cuadrado.style.backgroundColor = "red";
});

document.getElementById("btnAmarillo").addEventListener("click", () => {
    cuadrado.style.backgroundColor = "yellow";
});

document.getElementById("btnVerde").addEventListener("click", () => {
    cuadrado.style.backgroundColor = "green";
});