const inputInvitado = document.getElementById("inputInvitado");
const btnAgregar = document.getElementById("btnAgregar");
const listaInvitados = document.getElementById("listaInvitados");
const aviso = document.getElementById("aviso");

btnAgregar.addEventListener("click", function () {
    const nombre = inputInvitado.value.trim();

    // Validar que no esté vacío
    if (nombre === "") {
        aviso.textContent = "Ingresá un nombre.";
        return;
    }

    aviso.textContent = ""; // Limpiar aviso si todo está bien

    // 1. Crear el <li> y ponerle el nombre
    const li = document.createElement("li");
    li.textContent = nombre + " ";

    // 2. Crear el botón "Quitar"
    const btnQuitar = document.createElement("button");
    btnQuitar.textContent = "Quitar";
    btnQuitar.style.marginLeft = "10px";

    // 3. Programar la eliminación de este li específico
    btnQuitar.addEventListener("click", function () {
        li.remove();
    });

    // 4. Meter el botón adentro del li, y el li adentro de la lista ul
    li.appendChild(btnQuitar);
    listaInvitados.appendChild(li);

    // 5. Limpiar y dejar el cursor listo en el input
    inputInvitado.value = "";
    inputInvitado.focus();
});