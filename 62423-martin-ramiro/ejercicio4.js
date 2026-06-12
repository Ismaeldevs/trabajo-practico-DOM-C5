// 1. Seleccionamos el input y el párrafo de vista previa
const inputNombre = document.getElementById("inputNombre");
const preview = document.getElementById("preview");

// 2. Escuchamos el evento "input" en tiempo real
inputNombre.addEventListener("input", function () {
    const nombre = inputNombre.value.trim();

    // Si el campo quedó vacío, volvemos al texto original
    if (nombre === "") {
        preview.textContent = "Escribí tu nombre arriba.";
    } 
    // Si tiene texto, mostramos el saludo instantáneo
    else {
        preview.textContent = "¡Hola, " + nombre + "!";
    }
});