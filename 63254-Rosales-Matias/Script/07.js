const inputNombre = document.getElementById("inputNombre");
const inputProfesion = document.getElementById("inputProfesion");
const inputColorFav = document.getElementById("inputColorFav");
const btnGenerar = document.getElementById("btnGenerar");
const avisoP = document.getElementById("avisoP");
const resultados = document.getElementById("resultados");
btnGenerar.style.cursor = "pointer";
inputColorFav.style.cursor = "pointer";

btnGenerar.addEventListener("click", () => {
    const nombre = inputNombre.value.trim();
    const profesion = inputProfesion.value.trim();
    const color = inputColorFav.value;

    if(nombre === "" || profesion === "") {
        avisoP.textContent = "No puede ingresar un nombre o una profesión vacío."
    } else {
        const divTarjeta = document.createElement("div");
        const h3 = document.createElement("h3");
        const pResultado = document.createElement("p");
        const btnEliminar = document.createElement("button");

        //CSS tarjeta
        divTarjeta.style.borderLeft = "4px solid " + color;
        divTarjeta.style.borderRadius = "5px";
        divTarjeta.style.padding = "12px";
        divTarjeta.style.marginTop = "10px";
        //CSS boton
        btnEliminar.textContent = "Eliminar Tarjeta";
        btnEliminar.style.cursor = "pointer";

        h3.textContent = nombre;
        pResultado.textContent = profesion;

        resultados.appendChild(divTarjeta)
        divTarjeta.appendChild(h3);
        divTarjeta.appendChild(pResultado);
        divTarjeta.appendChild(btnEliminar);

        inputNombre.value = "";
        inputNombre.focus();
        inputProfesion.value = "";
        inputColorFav.value = "#3b82f6";
        avisoP.textContent = "";

        btnEliminar.addEventListener("click", () => {
            divTarjeta.remove();
        });
    }
})

