/* Ejercicio 04 */

const inputNombre = document.getElementById("inputNombre");
const preview = document.getElementById("preview");

inputNombre.addEventListener("input", function () {
    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        preview.textContent = "Escribe tu nombre arriba.";
    } else {
        preview.textContent = nombre;
        preview.style.color = "red";
    }
});

























