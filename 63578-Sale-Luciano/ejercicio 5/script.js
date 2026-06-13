const inputNombre = document.getElementById("inputNombre");
const btnAgregar = document.getElementById("btnAgregar");
const aviso = document.getElementById("aviso");
const listaInvitados = document.getElementById("listaInvitados");

btnAgregar.addEventListener("click", () => {
    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        aviso.textContent = "Por favor, escribí un nombre válido.";
        inputNombre.focus();
        return; 
    }

    aviso.textContent = "";


    const nuevoLi = document.createElement("li");
    nuevoLi.textContent = nombre + " "


    const btnQuitar = document.createElement("button");
    btnQuitar.textContent = 

    btnQuitar.addEventListener("click", () => {
        nuevoLi.remove();
    });

    nuevoLi.appendChild(btnQuitar);
    listaInvitados.appendChild(nuevoLi);

    inputNombre.value = "";
    inputNombre.focus();
});