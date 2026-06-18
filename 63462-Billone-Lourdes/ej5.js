const inputNombre = document.getElementById("inputNombre");
const btnAgregar = document.getElementById("btnAgregar");
const listaInvitados = document.getElementById("listaInvitados");
const aviso = document.getElementById("aviso");
btnAgregar.addEventListener("click", function () {
  const nombre = inputNombre.value.trim();
  // Si el nombre est á vac ío: mostrar aviso y salir
  if (nombre === "") {
    // completá
    aviso.textContent = "Completar nombre";
    return;
  }

  // Ocultar el aviso si hab ía uno
  aviso.textContent = "";

  // 1. Crear el <li >
  const li = document.createElement("li");

  // 2. Poner el nombre como texto del <li >
  li.textContent = nombre;

  // 3. Crear el bot ón " Quitar "
  const btnQuitar = document.createElement("button");
  btnQuitar.textContent = "Quitar";

  // 4. Al hacer clic en " Quitar ", eliminar el <li >
  btnQuitar.addEventListener("click", function () {
    // complet á
    li.remove();
  });

  // 5. Insertar el bot ón dentro del <li >
  li.appendChild(btnQuitar);

  // 6. Insertar el <li > dentro de la lista
  listaInvitados.appendChild(li);

  // 7. Limpiar y enfocar el campo
  inputNombre.value = "";
  inputNombre.focus();
});
