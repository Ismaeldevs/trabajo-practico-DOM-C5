// 1--------------------------------------------
const titulo = document.getElementById("titulo");
const btnCambiar = document.getElementById("btnCambiar");

btnCambiar.addEventListener("click", function () {
  titulo.textContent = "¡Bienvenido al DOM!";
  titulo.style.color = "navy";
});

// 2--------------------------------------------
const cuadrado = document.getElementById("cuadrado");
const btnRojo = document.getElementById("btnRojo");
const btnAmarillo = document.getElementById("btnAmarillo");
const btnVerde = document.getElementById("btnVerde");

btnRojo.addEventListener("click", () => {
  cuadrado.style.background = "red";
});

btnAmarillo.addEventListener("click", () => {
  cuadrado.style.background = "yellow";
});

btnVerde.addEventListener("click", () => {
  cuadrado.style.background = "green";
});

//3--------------------------------------------
const inputUsuario = document.getElementById("usuario");
const inputContrasena = document.getElementById("contrasena");
const btnLogin = document.getElementById("btnLogin");
const mensaje = document.getElementById("mensaje");

inputUsuario.addEventListener("input", function () {
  mensaje.textContent = "";
});

inputContrasena.addEventListener("input", function () {
  mensaje.textContent = "";
});

btnLogin.addEventListener("click", function () {
  const usuario = inputUsuario.value;
  const contrasena = inputContrasena.value;

  if (usuario === "" || contrasena === "") 
  {
    mensaje.textContent = "Completá todos los campos.";
    mensaje.style.color = "red";
  } else if (usuario === "admin" && contrasena === "1234") {
    mensaje.textContent = "¡Bienvenido, admin!";
    mensaje.style.color = "green";
  } 
  else 
  {
    mensaje.textContent = "Credenciales incorrectas";
    mensaje.style.color = "red";
  }
});

//4--------------------------------------------
const inputNombre = document.getElementById("inputNombre");
const preview = document.getElementById("preview");

inputNombre.addEventListener("input", function () {
  if (inputNombre.value === "") {
    preview.textContent = "Escribí tu nombre arriba.";
  } 
  else 
  {
    preview.textContent = "Hola, " + inputNombre.value + "!";
  }
});

//5--------------------------------------------
const inputInvitado = document.getElementById("inputInvitado")
const btnAgregar = document.getElementById("btnAgregar")
const listaInvitados = document.getElementById("listaInvitados")
const aviso = document.getElementById("aviso")

btnAgregar.addEventListener("click", function() {
  const nombre = inputInvitado.value.trim()

  if (nombre === "") 
  {
    aviso.textContent = "Ingresá un nombre."
    return
  }

  aviso.textContent = ""

  const li = document.createElement("li")
  li.textContent = nombre

  const btnQuitar = document.createElement("button")
  btnQuitar.textContent = "Quitar"

  btnQuitar.addEventListener("click", function () {
    li.remove()
  })

  li.appendChild(btnQuitar)
  listaInvitados.appendChild(li)

  inputInvitado.value = ""
  inputInvitado.focus()
})
//6--------------------------------------------
const tarjeta = document.getElementById("tarjeta");
const btnToggle = document.getElementById("btnToggle");

btnToggle.addEventListener("click", function() {

  const ahoraOculto = tarjeta.classList.toggle("oculto");

  if (ahoraOculto) {
    btnToggle.textContent = "Mostrar";
  } else {
    btnToggle.textContent = "Ocultar";
  }

});

//7--------------------------------------------
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

 
  if (nombre === "" || profesion === "")
  {
    avisoP.textContent = "Debe completar nombre y profesión";
    return;
  }

  avisoP.textContent = "";

 
  const tarjeta = document.createElement("div");

  tarjeta.style.borderLeft = "6px solid " + color;
  tarjeta.style.borderRadius = "8px";
  tarjeta.style.padding = "12px";
  tarjeta.style.marginTop = "10px";

  
  const titulo = document.createElement("h3");
  titulo.textContent = nombre;

  
  const texto = document.createElement("p");
  texto.textContent = profesion;

  
  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar tarjeta";

  btnEliminar.addEventListener("click", function () {
    tarjeta.remove();
  });

  
  tarjeta.appendChild(titulo);
  tarjeta.appendChild(texto);
  tarjeta.appendChild(btnEliminar);

  resultados.appendChild(tarjeta);

});

