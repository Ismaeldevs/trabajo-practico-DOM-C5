// Seleccionamos la tarjeta y el botón
const tarjeta = document.getElementById("tarjeta");
const btnToggle = document.getElementById("btnToggle");

btnToggle.addEventListener("click", function () {
  // classList.toggle("oculto") agrega la clase si no la tiene,
  // y la quita si ya la tiene. Retorna true si la clase fue AGREGADA.
  const estaOculta = tarjeta.classList.toggle("oculto");

  // Según el estado resultante, actualizamos el texto del botón
  if (estaOculta) {
    // La tarjeta acaba de ocultarse → el botón debe decir "Mostrar"
    btnToggle.textContent = "Mostrar";
  } else {
    // La tarjeta acaba de mostrarse → el botón debe decir "Ocultar"
    btnToggle.textContent = "Ocultar";
  }
});
