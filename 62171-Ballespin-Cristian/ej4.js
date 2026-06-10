const inputNombre = document.getElementById("inputNombrePreview");
const preview = document.getElementById("preview");

inputNombre.addEventListener("input", () => {

    if (inputNombre.value.trim() === "") {
        preview.textContent = "Escribí tu nombre arriba.";
    }
    else {
        preview.textContent = `Hola, ${inputNombre.value}!`;
    }

});