const inputNombre = document.getElementById("inputNombre");
const preview = document.getElementById("preview");

inputNombre.addEventListener("input", function() {
    if(inputNombre !== "") {
        preview.textContent = "¡Hola, " + inputNombre.value + "!";
    }
});