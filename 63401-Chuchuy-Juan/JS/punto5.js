const listaInvitados = document.getElementById("listaInvitados");
const btnAgregar = document.getElementById("btnAgregar");
const invitado = document.getElementById("invitado");   

const msj = document.getElementById("msj")
msj.style.display = "none";

const li = document.createElement("li");
const btnQuitar = document.createElement("button");

btnAgregar.addEventListener("click", () =>{
    
    const nombre = invitado.value.trim();
    invitado.value = "";
    invitado.focus();

    if(nombre != ""){
        msj.style.display = "none";
        li.textContent = nombre;
        listaInvitados.appendChild(li);
        li.appendChild(btnQuitar);
        btnQuitar.textContent = "Quitar Invitado";
        btnQuitar.addEventListener("click", () => {

            li.remove();

        })    

    }else{

        msj.style.display = "block";

    }

})


