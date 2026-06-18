const inputInvitado = document.getElementById("inputInvitado");
const btnAgregar = document.getElementById("btnAgregar");
const listaInvitados = document.getElementById("listaInvitados");
const aviso = document.getElementById("aviso");

btnAgregar.addEventListener("click", () => {
    const nombre = inputInvitado.value.trim();

    if (nombre === "") {
        aviso.textContent = "Ingresá un nombre.";
        return;
    }

    aviso.textContent = "";

    const li = document.createElement("li");
    li.textContent = nombre;

    listaInvitados.appendChild(li);

    inputInvitado.value = "";
});