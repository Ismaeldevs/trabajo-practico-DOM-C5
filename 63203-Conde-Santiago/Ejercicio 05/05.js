/* Ejercicio 05 */

const inputNombre = document.getElementById("inputNombre");
const btnAgregar = document.getElementById("btnAgregar");
const aviso = document.getElementById("aviso");
const listaInvitados = document.getElementById("listaInvitados");

btnAgregar.addEventListener("click", function () {
    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        aviso.textContent = "Error. Ingresa un nombre.";
    } else {
        // dejo el aviso vacio
        aviso.textContent = "";

        // creo el elemento a meter en el contenedor
        const li = document.createElement("li");

        // le doy el valor de nombre a la variable
        li.textContent = nombre;

        // inserto el elemento en el contenedor
        listaInvitados.appendChild(li);

        // creo el boton para quitar un elemento
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";

        // creo el evento para que cuando clickee se elimine el elemento
        btnEliminar.addEventListener("click", function () {
            btnEliminar.remove();
        })

        // agrego el boton a el elemento li (solo aparecera ahi)
        li.appendChild(btnEliminar);

        // vacío el input
        inputNombre.value = "";
        inputNombre.focus();
    }
});






















