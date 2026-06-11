const inputNombreEj5 = document.getElementById("inputNombreEj5");
const btnAgregar = document.getElementById("btnAgregar");
const listaInvitados = document.getElementById("listaInvitados");
const aviso = document.getElementById("aviso");

btnAgregar.addEventListener("click", function() {
    const nombre = inputNombreEj5.value.trim();

    if (nombre === "") {
        aviso.textContent = "Ingresá un nombre.";
        return;
    }

    aviso.textContent = "";

    const li = document.createElement("li");
    li.textContent = nombre + " "; 

    const btnQuitar = document.createElement("button");
    btnQuitar.textContent = "Quitar";

    btnQuitar.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(btnQuitar);
    listaInvitados.appendChild(li);

    inputNombreEj5.value = "";
    inputNombreEj5.focus();
});