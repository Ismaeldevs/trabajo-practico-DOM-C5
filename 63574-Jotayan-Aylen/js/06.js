function ej6Toggle() {
  const t = document.getElementById('tarjeta-demo');
  const btn = document.getElementById('btn-toggle-demo');
  const oculto = t.classList.toggle('oculto');
  btn.textContent = oculto ? 'Mostrar' : 'Ocultar';
}
