/* Ejercicio 07 */

const inpNombre = document.getElementById("inpNombre");
const inpProfesion = document.getElementById("inpProfesion");
const inpColor = document.getElementById("inpColor");
const btnGenerar = document.getElementById("btnGenerar");
const avisoP = document.getElementById("avisoP");
const resultados = document.getElementById("resultados");

// Agregar evento al botón
btnGenerar.addEventListener("click", function () {
    // Obtener los valores de los inputs
    const nombre = inpNombre.value.trim();
    const profesion = inpProfesion.value.trim();
    const color = inpColor.value.trim();

    if (nombre === "" || profesion === "") {
        avisoP.textContent = "Error. Los campos están vacíos";
    } else {
        avisoP.textContent = "";
        
        // creo el contenedor div con estilos
        const div = document.createElement("div");
        div.style.border = "4px solid " + color;
        div.style.borderRadius = "8px";
        div.style.padding = "12px";
        div.style.marginTop = "10px";

        // creo el h3 y le asigno nombre
        const h3 = document.createElement("h3");
        h3.textContent = nombre;
        div.appendChild(h3);

        // le asigno la profesion al parrafo
        avisoP.textContent = profesion;
        div.appendChild(avisoP);

        // Creo el botón de eliminar la tarjeta
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar tarjeta";

        btnEliminar.addEventListener("click", function () {
            if (confirm("Esta seguro de eliminar la tarjeta?")) {
                div.remove();
            }
        });

        // agrego botón eliminar a la tarjeta
        div.appendChild(btnEliminar);

        // agrego la tarjeta al contenedor de resultados
        resultados.appendChild(div);
    }
});



























