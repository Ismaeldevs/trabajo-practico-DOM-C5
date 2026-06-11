let btnCambiar = document.getElementById("btnCambiar");
let titulo = document.getElementById("titulo");
btnCambiar.style.cursor = "pointer";

btnCambiar.addEventListener("click", () => {
    titulo.textContent = "¡Bienvenido al DOM!";
    titulo.style.color = "navy";   
});