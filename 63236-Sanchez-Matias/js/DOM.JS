const titulo = document.getElementById("titulo");
const btn = document.getElementById("btnCambiar");

function cambiar() {
  titulo.textContent = "HOLA MUNDO";
  titulo.style.color = "red";
}

btn.addEventListener("click", cambiar);

// -------------------------------------------------------------------------------------
// 2
const cuadrado = document.getElementById("cuadrado");
const btnRojo = document.getElementById("btnRojo");
const btnAmarillo = document.getElementById("btnAmarillo");
const btnVerde = document.getElementById("btnVerde");

function Rojo() {
  cuadrado.style.background = "red";
}

btnRojo.addEventListener("click", Rojo);
btnAmarillo.addEventListener("click", () => {
  cuadrado.style.background = "yellow";
});
btnVerde.addEventListener("click", () => {
  cuadrado.style.background = "green";
});

// -------------------------------------------------------------------------------------
// 3
const inputUsuario = document.getElementById("inputUsuario");
const inputContraseña = document.getElementById("inputContraseña");
const boton = document.getElementById("enviarForm");
const texto = document.getElementById("completarCampos");

function Validacion() {
  const usuario = "admin";
  const contraseña = "1234";

  if (inputContraseña.value === "" && inputUsuario.value === "") {
    texto.textContent = "Completa todos los datos";
    texto.style.color = "red";
    return;
  }

  if (inputContraseña.value === contraseña && inputUsuario.value === usuario) {
    texto.textContent = "¡Bienvenido, Admin!";
    texto.style.color = "green";
  } else {
    texto.textContent = "Credenciales incorrectas";
    texto.style.color = "red";
  }
}

inputContraseña.addEventListener("input", () => {
  texto.textContent = " ";
});

inputUsuario.addEventListener("input", () => {
  texto.textContent = " ";
});

boton.addEventListener("click", Validacion);
// -------------------------------------------------------------------------------------
// 4
const inputNombre = document.getElementById("inputNombre");
const escribirNombre = document.getElementById("escribirNombre");

inputNombre.addEventListener("input", () => {
  const n = inputNombre.value;

  if (inputNombre.value === "") {
    escribirNombre.textContent = "Escribir nombre arriba";
  } else {
    escribirNombre.textContent = `Hola ${n}`;
  }
});
// -------------------------------------------------------------------------------------
// 5
const inputLista = document.getElementById("inputLista");
const btnLista = document.getElementById("btnLista");
const aviso = document.getElementById("aviso");
const listaInvitados = document.getElementById("listaInvitados");

function AgregarInvitados() {
  let invitados = inputLista.value;

  const li = document.createElement("li");
  const p = document.createElement("p");

  p.textContent = invitados;

  const botonLista = document.createElement("button");

  if (inputLista.value == "") {
    aviso.textContent = "Agregue un valor al campo...";
    aviso.style.color = "red";
  } else {
    botonLista.textContent = "eliminar";

    function botonEliminar() {
      li.remove();
    }

    botonLista.addEventListener("click", botonEliminar);

    li.appendChild(p);
    li.appendChild(botonLista);
    listaInvitados.appendChild(li);
  }
}

btnLista.addEventListener("click", AgregarInvitados);

// -------------------------------------------------------------------------------------
// 6
const botonOculto = document.getElementById("botonOculto");
const tarjeta = document.getElementById("tarjeta");

botonOculto.addEventListener("click", () => {
  // este occulto hace referencia a la clase
  const ahoraOculto = tarjeta.classList.toggle("oculto");

  // cambia entre mostrar y ocultar
  botonOculto.textContent = ahoraOculto ? "mostrar" : "ocultar";
});
// -------------------------------------------------------------------------------------
// 7
const inpNombre = document.getElementById("inpNombre");
const Profesion = document.getElementById("Profesion");
const InpColor = document.getElementById("InpColor");
const btnGenerar = document.getElementById("btnGenerar");
const avisoPerfil = document.getElementById("avisoPerfil");
const resultados = document.getElementById("resultados");

function crearDiv() {
  let div = document.createElement("div");
  let p = document.createElement("p");
  let h3 = document.createElement("h3");
  let eliminarBoton = document.createElement("button");

  if (inpNombre.value === "" && Profesion.value === "") {
    avisoPerfil.textContent = "ingrese todos los campos";
    avisoPerfil.style.color = "red";
  } else {
    div.style.backgroundColor=InpColor.value;
    div.classList.add("div");
    
    h3.textContent = inpNombre.value;
    p.textContent = Profesion.value;
    eliminarBoton.textContent = "eliminar";

    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(eliminarBoton);
    resultados.appendChild(div);

    eliminarBoton.addEventListener("click", function () {
      div.remove();
    });
  }
}

btnGenerar.addEventListener("click", crearDiv);
