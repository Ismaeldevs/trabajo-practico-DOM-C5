function ej3Login() {
  const usuario = document.getElementById('ej3-user').value.trim();
  const contrasena = document.getElementById('ej3-pass').value.trim();
  const msg = document.getElementById('ej3-msg');
  if (!usuario || !contrasena) {
    msg.textContent = 'Completá todos los campos.';
    msg.style.color = '#f87171';
    return;
  }
  if (usuario === 'admin' && contrasena === '1234') {
    msg.textContent = '¡Bienvenido, admin!';
    msg.style.color = '#4ade80';
  } else {
    msg.textContent = 'Credenciales incorrectas.';
    msg.style.color = '#f87171';
  }
}