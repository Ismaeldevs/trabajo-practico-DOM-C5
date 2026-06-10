const tarjeta = document.getElementById("tarjeta");
const btnToggle = document.getElementById("btnToggle");

 btnToggle.addEventListener("click", function () {
 // 1. Alternar la clase "oculto" en la tarjeta
 tarjeta.classList.toggle("oculto")
 // 2. Cambiar el texto del botón según el estado

 });