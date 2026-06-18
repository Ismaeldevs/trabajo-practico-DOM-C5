const inputNombre = document.getElementById("inputNombre");
const btnAgregar = document.getElementById("btnAgregar");
const aviso = document.getElementById("aviso");
const listaInvitados = document.getElementById("listaInvitados");
btnAgregar.addEventListener("click", function () {
    const nombre = inputNombre.value.trim();

    if(nombre === ""){
        aviso.textContent = "Debes colocar un nombre";
        return;
    }

    aviso.textContent = "";

    const li = document.createElement("li");
    li.textContent = nombre;

    const btnQuitar = document.createElement("button");
    btnQuitar.textContent = "Quitar";

    btnQuitar.addEventListener("click", function (){
        li.remove();
    });

    li.appendChild(btnQuitar);
    listaInvitados.appendChild(li);

    inputNombre.value = "";
    inputNombre.focus();
});