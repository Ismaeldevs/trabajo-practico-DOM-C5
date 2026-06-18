const tarjeta = document.getElementById("tarjeta");
const btnToggle = document.getElementById("btnToggle");

btnToggle.addEventListener("click", function () {
  const estaOculta = tarjeta.classList.toggle("oculto");
  btnToggle.textContent = estaOculta ? "Mostrar" : "Ocultar";
});