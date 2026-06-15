const inputUsuario = document.getElementById("usuario");
const inputContrasena = document.getElementById("contrasena");
const btnLogin = document.getElementById("btnLogin");
const mensaje = document.getElementById("mensaje");
const contenedorTexto = document.getElementById("contenedorTexto");
// Limpiar el mensaje cuando el usuario empieza a escribir
inputUsuario.addEventListener("input", function () {
  // borrar el texto del mensaje
  contenedorTexto.innerHTML = "";
});

inputContrasena.addEventListener("input", function () {
  // borrar el texto del mensaje
  contenedorTexto.innerHTML = "";
});

btnLogin.addEventListener("click", function () {
  const usuario = inputUsuario.value.trim();
  const contrasena = inputContrasena.value.trim();

  // Validar campos vacíos

  if (!usuario || !contrasena) {
    const p = document.createElement("p");
    p.textContent = "Completa todos los campos";
    p.style.color = "red";
    contenedorTexto.appendChild(p);
    return;
  }
  // Validar usuario y contraseña correctos

  if (usuario === "admin" && contrasena === "1234") {
    const p = document.createElement("p");
    p.textContent = "Bienvenido, Admin";
    p.style.color = "green";
    contenedorTexto.appendChild(p);
  } else {
    const p = document.createElement("p");
    p.textContent = "Credenciales incorrectas";
    p.style.color = "red";
    contenedorTexto.appendChild(p);
  }
  // Mostrar mensaje correspondiente con color
});
