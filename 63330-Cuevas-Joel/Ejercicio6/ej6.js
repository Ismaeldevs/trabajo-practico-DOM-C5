const tarjeta = document.getElementById('tarjeta');
const btnToggle = document.getElementById('btnToggle');

btnToggle.addEventListener('click', function() {
    tarjeta.classList.toggle('oculto');
});