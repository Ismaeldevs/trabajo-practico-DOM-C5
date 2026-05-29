/* Ejercicio 01 */

const Titulo = document.getElementById("Titulo");
const btnCambiar = document.getElementById("btnCambiar");

btnCambiar.addEventListener("click", function () {
    if (Titulo.textContent == "Esperando cambio...") {
        Titulo.textContent = "Bienvenido al DOM";
        Titulo.style.color = "navy";
    } else {
        Titulo.textContent = "Esperando cambio...";
        Titulo.style.color = "black";
    }
})



