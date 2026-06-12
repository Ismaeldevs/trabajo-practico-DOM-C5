const tarjeta = document.getElementById("tarjeta");
const btnToggle = document.getElementById("btnToggle");

btnToggle.addEventListener("click", function () {
    // Alterna la clase oculto (agrega o saca según corresponda)
    tarjeta.classList.toggle("oculto");

    // Cambiar el texto del botón mirando si la tarjeta quedó oculta o no
    if (tarjeta.classList.contains("oculto")) {
        btnToggle.textContent = "Mostrar";
    } else {
        btnToggle.textContent = "Ocultar";
    }
});