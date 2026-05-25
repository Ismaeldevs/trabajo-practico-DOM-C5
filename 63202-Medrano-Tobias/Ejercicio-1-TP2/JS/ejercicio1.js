const titulo = document.getElementById("titulo");

const boton = document.getElementById("btnCambiar");

boton.addEventListener("click", funcion);

function funcion() {
    titulo.textContent = "Bienvenido al DOM";
    titulo.style.color = "navy";
}