const tarjeta = document.getElementById('tarjeta');
const botonToggle = document.getElementById('botonToggle');

botonToggle.addEventListener("click", function () {
    tarjeta.classList.toggle('oculto');
    if (tarjeta.classList.contains('oculto')) {
        botonToggle.textContent = 'Mostrar Tarjeta';
    } else {
        botonToggle.textContent = 'Ocultar Tarjeta';
    }
});