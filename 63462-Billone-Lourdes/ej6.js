const tarjeta = document.getElementById("tarjeta");
const btnToggle = document.getElementById("btnToggle");

btnToggle.addEventListener("click", function () {
  // 1. Alternar la clase " oculto " en la tarjeta
  // 2. Cambiar el texto del bot ón seg ún el estado

  const estadoOculta = tarjeta.classList.toggle("oculto");
  if (estadoOculta) {
    btnToggle.textContent = "Mostrar";
  } else {
    btnToggle.textContent = "Ocultar";
  }
});
