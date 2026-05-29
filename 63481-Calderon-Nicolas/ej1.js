const titulo = document.getElementById("titulo");
const btnCambiar = document.getElementById("btnCambiar");

btnCambiar.addEventListener("click", () => {
    titulo.textContent = "Titulo cambiado";
    titulo.style.color = "blue";
});