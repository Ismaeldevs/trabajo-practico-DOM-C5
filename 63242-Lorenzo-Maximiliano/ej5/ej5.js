const inputNombre=document.getElementById("inputNombre");
const btnAgregar=document.getElementById("btnAgregar");
const listaInvitados=document.getElementById("listaInvitados");
const aviso=document.getElementById("aviso");

btnAgregar.addEventListener("click", function(){
    
    const nombre=inputNombre.value.trim();

    if (nombre==="")
    {
        aviso.textContent="Ingresa un nombre";
        return;
    }

    aviso.textContent="";

    const li=document.createElement("li");
    li.textContent=nombre;

    //creo el boton para quitar
    const btnQuitar=document.createElement("button");
    btnQuitar.textContent="Quitar";

    //elimino el li
    btnQuitar.addEventListener("click", function(){
        li.remove();
    });

    //agrego boton al li
    li.appendChild(btnQuitar);
    //agrego li a la lista
    listaInvitados.appendChild(li);

    //limpio
    inputNombre.value="";
    inputNombre.focus();

});