const nombre = document.getElementById("nombre");
const preview = document.getElementById("preview");
nombre.addEventListener("input", function() {
    const valor = nombre.value.trim();
    if (valor == '') {
        preview.textContent = 'Escribe tu nombre';
    } else {
        preview.textContent = `Hola, ${valor}`;
    }
});