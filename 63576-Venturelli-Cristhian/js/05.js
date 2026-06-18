function ej5Agregar() {
  const input = document.getElementById('ej5-input');
  const aviso = document.getElementById('ej5-aviso');
  const lista = document.getElementById('ej5-lista');
  const nombre = input.value.trim();
  if (!nombre) { aviso.textContent = 'Ingresá un nombre antes de agregar.'; return; }
  aviso.textContent = '';
  const li = document.createElement('li');
  li.textContent = nombre + ' ';
  const btn = document.createElement('button');
  btn.textContent = 'Quitar';
  btn.addEventListener('click', () => li.remove());
  li.appendChild(btn);
  lista.appendChild(li);
  input.value = '';
  input.focus();
}