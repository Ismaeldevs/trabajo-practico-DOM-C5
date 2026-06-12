const inpNombre = document.getElementById("inpNombre");
const inpProfesion = document.getElementById("inpProfesion");
const inpColor = document.getElementById("inpColor");
const btnGenerar = document.getElementById("btnGenerar");
const resultados = document.getElementById("resultados");
const avisoP = document.getElementById("avisoP");

btnGenerar.addEventListener("click", function () {
    const nombre = inpNombre.value.trim();
    const profesion = inpProfesion.value.trim();
    const color = inpColor.value;

    // Validar campos vacíos
    if (nombre === "" || profesion === "") {
        avisoP.textContent = "Por favor, completa nombre y profesión.";
        return;
    }

    avisoP.textContent = ""; // Limpiar aviso

    // 1. Crear el contenedor de la tarjeta y darle estilos inline
    const tarjeta = document.createElement("div");
    tarjeta.style.borderLeft = "6px solid " + color;
    tarjeta.style.background = "#fff";
    tarjeta.style.padding = "12px";
    tarjeta.style.marginTop = "10px";
    tarjeta.style.borderRadius = "8px";
    tarjeta.style.boxShadow = "0 2px 4px rgba(0,0,0,0.05)";

    // 2. Crear los elementos internos (h3, p y botón de borrar)
    const h3 = document.createElement("h3");
    h3.textContent = nombre;
    h3.style.margin = "0 0 5px 0";

    const p = document.createElement("p");
    p.textContent = profesion;
    p.style.margin = "0 0 10px 0";

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar tarjeta";

    // 3. Lógica para eliminar esta tarjeta en específico
    btnEliminar.addEventListener("click", function () {
        tarjeta.remove();
    });

    // 4. Armar la jerarquía de elementos (meter todo adentro del div tarjeta)
    tarjeta.appendChild(h3);
    tarjeta.appendChild(p);
    tarjeta.appendChild(btnEliminar);

    // 5. Meter la tarjeta terminada en la sección de resultados
    resultados.appendChild(tarjeta);

    // 6. Limpiar campos del formulario
    inpNombre.value = "";
    inpProfesion.value = "";
});