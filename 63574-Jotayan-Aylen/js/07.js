function ej7Generar() {
  const nombre = document.getElementById('ej7-nombre').value.trim();
  const profesion = document.getElementById('ej7-profesion').value.trim();
  const color = document.getElementById('ej7-color').value;
  const aviso = document.getElementById('ej7-aviso');
  const resultados = document.getElementById('ej7-resultados');
  if (!nombre || !profesion) { aviso.textContent = 'Completá nombre y profesión.'; return; }
  aviso.textContent = '';
  const tarjeta = document.createElement('div');
  tarjeta.style.borderLeft = '6px solid ' + color;
  tarjeta.style.borderRadius = '8px';
  tarjeta.style.padding = '12px';
  tarjeta.style.marginTop = '10px';
  tarjeta.style.background = '#1d2130';
  const h3 = document.createElement('h3');
  h3.textContent = nombre;
  h3.style.marginBottom = '.25rem';
  const p = document.createElement('p');
  p.textContent = profesion;
  p.style.color = '#7a82a0';
  p.style.fontSize = '.85rem';
  const btnEl = document.createElement('button');
  btnEl.textContent = 'Eliminar tarjeta';
  btnEl.style.cssText = 'background:#7f1d1d;color:#fca5a5;border:none;padding:.2rem .5rem;border-radius:4px;cursor:pointer;font-size:.75rem;margin-top:.5rem';
  btnEl.addEventListener('click', () => tarjeta.remove());
  tarjeta.appendChild(h3);
  tarjeta.appendChild(p);
  tarjeta.appendChild(btnEl);
  resultados.appendChild(tarjeta);
}