const inpNombre = document.getElementById("inpNombre");

const inpProfesion = document.getElementById("inpProfesion");

const inpColor = document.getElementById("inpColor");

const btnGenerar = document.getElementById("btnGenerar");

const avisoP = document.getElementById("avisoP");

const resultados = document.getElementById("resultados");

btnGenerar.addEventListener("click", () => {
    const nombre = inpNombre.value.trim();
    const profesion = inpProfesion.value.trim();
    const color = inpColor.value;
    if (nombre === "" && profesion === "") {
        avisoP.textContent = "Por favor, ingresa un nombre y una profesión.";
        return;
    }
    const tarjeta = document.createElement("div");
    tarjeta.style.padding = "12px";
    tarjeta.style.marginBottom = "10px";
    tarjeta.style.borderRadius = "8px";
    tarjeta.style.borderLeft = `4px solid ${color}`;
    tarjeta.style.backgroundColor = "#cfd16e";
    tarjeta.style.width = "200px";
    resultados.appendChild(tarjeta);
    const nombreElem = document.createElement("h3");
    nombreElem.textContent = nombre;
    const profesionElem = document.createElement("p");
    profesionElem.textContent = profesion;
    tarjeta.appendChild(nombreElem);
    tarjeta.appendChild(profesionElem);
    
    const btnQuitar = document.createElement("button");
    btnQuitar.textContent = "Quitar";

    btnQuitar.addEventListener("click", () => {
        resultados.removeChild(tarjeta);
    });
    tarjeta.appendChild(btnQuitar);
});