const inputNombreEj4 = document.getElementById("inputNombreEj4");
const preview = document.getElementById("preview");

inputNombreEj4.addEventListener("input", function() {
    if (inputNombreEj4.value.trim() === "") {
        preview.textContent = "Escribí tu nombre arriba.";
    } else {
        preview.textContent = `¡Hola, ${inputNombreEj4.value}!`;
    }
});