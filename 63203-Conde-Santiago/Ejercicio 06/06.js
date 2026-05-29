/* Ejercicio 06 */

const tarjeta = document.getElementById("tarjeta");
const btnToggle = document.getElementById("btnToggle");

btnToggle.addEventListener("click", function () {
    tarjeta.classList.toggle("oculto");
    
    if (btnToggle.textContent === "Ocultar") {
        btnToggle.textContent = "Mostrar";
    } else {
        btnToggle.textContent = "Ocultar";
    }
});


















