function ej4() {
  const val = document.getElementById('ej4-input').value;
  const p = document.getElementById('preview-p');
  p.textContent = val === '' ? 'Escribí tu nombre arriba.' : `Holá, ${val}!`;
}