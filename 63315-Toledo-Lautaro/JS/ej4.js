const inputNombrePreview = document.getElementById("inputNombrePreview");
const preview = document.getElementById("preview");

inputNombrePreview.addEventListener("input", () => {
    const nombre = inputNombrePreview.value.trim();

    if (nombre === "") {
        preview.textContent = "Escribí tu nombre arriba.";
    } else {
        preview.textContent = `Hola, ${nombre}!`;
    }
});