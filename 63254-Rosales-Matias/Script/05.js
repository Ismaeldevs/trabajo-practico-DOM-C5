const inputNombre = document.getElementById("inputNombre");
const btnAgregar = document.getElementById("btnAgregar");
const aviso = document.getElementById("aviso");
const listaInvitados = document.getElementById("listaInvitados");

aviso.textContent = "Ingresá un nombre."
btnAgregar.style.cursor = "pointer";

btnAgregar.addEventListener("click", () => {
    const nombre = inputNombre.value.trim();

    if(nombre === "") {
        aviso.textContent = "No se pueden agregar nombres vacíos.";
        return
    }

    aviso.textContent = "";

    const li = document.createElement("li");

    li.textContent = nombre;
    li.style.padding = "5px";

    const btnQuitar = document.createElement("button");
    btnQuitar.textContent = "Quitar";
    btnQuitar.style.cursor = "pointer";
    btnQuitar.style.marginLeft = "10px";

    btnQuitar.addEventListener("click", function() {
        li.remove();
    })

    li.appendChild(btnQuitar);
    listaInvitados.appendChild(li)
    inputNombre.value = "";
    inputNombre.focus();
});