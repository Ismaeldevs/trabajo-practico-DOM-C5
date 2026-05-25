const nombre = document.getElementById("inputNombre");

const preview = document.getElementById("preview");

nombre.addEventListener("input", function() {
    if (nombre.value === "") {
        preview.textContent = "Escribí tu nombre arriba! ";
    } else {
        preview.textContent = `Hola, ${nombre.value}!`;
    }
})