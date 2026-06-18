const titulo = document.getElementById("titulo");
const btnCambiar = document.getElementById("btnCambiar");

btnCambiar.addEventListener("click", () => {
    titulo.textContent = "¡Bienvenido al DOM!";
    titulo.style.color = "navy";
});