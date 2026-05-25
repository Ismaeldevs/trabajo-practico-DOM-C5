const nombre = document.getElementById("nombre");
const botonAgregar = document.getElementById("botonAgregar");
const aviso = document.getElementById("aviso");
const lista = document.getElementById("listaInvitados");

botonAgregar.addEventListener("click", function () {
    const nombreInvitado = nombre.value.trim();
    if (nombreInvitado === "") {
        aviso.textContent = "Por favor, ingresa un nombre.";
        return;
    }
    
    aviso.textContent = "";
    
    const li = document.createElement("li");
    li.textContent = nombreInvitado;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener("click", function(){
        li.remove();
    })
    
    li.appendChild(botonEliminar);
    lista.appendChild(li);
    nombre.value = "";
    nombre.focus();
})