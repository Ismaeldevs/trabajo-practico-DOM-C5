// ===============================
// Ejercicio 1 - Cambiar el título
// ===============================
const titulo = document.getElementById("titulo");
const btnCambiar = document.getElementById("btnCambiar");

const cambiarTitulo = () => {
  titulo.textContent = "¡Bienvenido al DOM!";
  titulo.style.color = "navy";
};
btnCambiar.addEventListener("click", cambiarTitulo);

// =================================
// Ejercicio 2 - Semáforo de colores
// =================================

const cuadrado = document.getElementById("cuadrado");
const btnRojo = document.getElementById("btnRojo");
const btnAmarillo = document.getElementById("btnAmarillo");
const btnVerde = document.getElementById("btnVerde");

btnRojo.addEventListener("click", () => {
  cuadrado.style.backgroundColor = "red";
});

btnAmarillo.addEventListener("click", () => {
  cuadrado.style.backgroundColor = "yellow";
});

btnVerde.addEventListener("click", () => {
  cuadrado.style.backgroundColor = "green";
});

// =================================
// Ejercicio 3 - Formulario de login
// =================================
const inputUsuario = document.getElementById("usuario");
const inputContrasena = document.getElementById("contrasena");
const btnLogin = document.getElementById("btnLogin");
const mensaje = document.getElementById("mensaje");

const validarLogin = () => {
  const usuario = inputUsuario.value.trim();
  const contrasena = inputContrasena.value.trim();

if (usuario === "" || contrasena === "") {
    mensaje.textContent = "Completá todos los campos.";
    mensaje.style.color = "red";
    return;
}

if (usuario === "admin" && contrasena === "1234") {
    mensaje.textContent = "¡Bienvenido, admin!";
    mensaje.style.color = "green";
} else {
    mensaje.textContent = "Credenciales incorrectas.";
    mensaje.style.color = "red";
}
};

btnLogin.addEventListener("click", validarLogin);

inputUsuario.addEventListener("input", () => {
  mensaje.textContent = "";
});

inputContrasena.addEventListener("input", () => {
 mensaje.textContent = "";
});

// ===================================
// Ejercicio 4 - Nombre en tiempo real
// ===================================
const inputNombreEj4 = document.getElementById("inputNombreEj4");
const preview = document.getElementById("preview");

inputNombreEj4.addEventListener("input", () => {
  if (inputNombreEj4.value === "") {
    preview.textContent = "Escribi tu nombre arriba.";
} else {
    preview.textContent = `Holá, ${inputNombreEj4.value}!`;
}
});

// ================================
// Ejercicio 5 - Lista de invitados
// ================================
const inputNombre = document.getElementById("inputNombre");
const btnAgregar = document.getElementById("btnAgregar");
const listaInvitados = document.getElementById("listaInvitados");
const aviso = document.getElementById("aviso");

const agregarInvitado = () => {
const nombre = inputNombre.value.trim();

if (nombre === "") {
aviso.textContent = "Ingresá un nombre.";
return;
}

aviso.textContent = "";

const li = document.createElement("li");
li.textContent = nombre;
const btnQuitar = document.createElement("button");
btnQuitar.textContent = "Quitar";

btnQuitar.addEventListener("click", function () {
    li.remove();
});

li.appendChild(btnQuitar);
listaInvitados.appendChild(li);

inputNombre.value = "";
inputNombre.focus();
};

btnAgregar.addEventListener("click", agregarInvitado);
//==============================================
// Ejercicio 6 - Alternar contenido con un botón
//==============================================
const tarjeta = document.getElementById("tarjeta");
const btnToggle = document.getElementById("btnToggle");

btnToggle.addEventListener("click", function () {
const estaOculta = tarjeta.classList.toggle("oculto");
if (estaOculta) {
    btnToggle.textContent = "Mostrar";
} else {
    btnToggle.textContent = "Ocultar";
}
});

//==============================================
// Ejercicio 7 - Generador de tarjetas de perfil
//==============================================
const inpNombre = document.getElementById("inpNombre");
const inpProfesion = document.getElementById("inpProfesion");
const inpColor = document.getElementById("inpColor");
const btnGenerar = document.getElementById("btnGenerar");
const resultados = document.getElementById("resultados");
const avisoP = document.getElementById("avisoP");

btnGenerar.addEventListener("click", function () {
const nombre = inpNombre.value.trim();
const profesion = inpProfesion.value.trim();
const color = inpColor.value;

if (nombre === "" || profesion === "") {
    avisoP.textContent = "Completá el nombre y la profesión.";
    return;
}

avisoP.textContent = "";

const div = document.createElement("div");
div.style.borderLeft = "6px solid " + color;
div.style.borderRadius = "8px";
div.style.padding = "12px";
div.style.marginTop = "10px";

const h3 = document.createElement("h3");
h3.textContent = nombre;

const p = document.createElement("p");
p.textContent = profesion;

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar tarjeta";

  btnEliminar.addEventListener("click", function () {
    div.remove();
  });

  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(btnEliminar);
  resultados.appendChild(div);
});