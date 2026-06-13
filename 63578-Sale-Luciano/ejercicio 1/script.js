const h1 = document.getElementById("titulo");
const botonCambiar = document.getElementById("btnCambiar");

botonCambiar.addEventListener("click", () => {

h1.textContent = "El título ha cambiado";
h1.style.color = "navy";

})
