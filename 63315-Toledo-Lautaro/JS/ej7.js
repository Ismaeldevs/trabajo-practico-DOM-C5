const inpNombre = document.getElementById("inpNombre");
const inpProfesion = document.getElementById("inpProfesion");
const inpColor = document.getElementById("inpColor");
const btnGenerar = document.getElementById("btnGenerar");
const resultados = document.getElementById("resultados");
const avisoP = document.getElementById("avisoP");

btnGenerar.addEventListener("click", () => {
    const nombre = inpNombre.value.trim();
    const profesion = inpProfesion.value.trim();

    if (nombre === "" || profesion === "") {
        avisoP.textContent = "Completá nombre y profesión.";
        return;
    }

    avisoP.textContent = "";

    const tarjeta = document.createElement("div");
    tarjeta.style.borderLeft = `6px solid ${inpColor.value}`;
    tarjeta.style.padding = "10px";

    tarjeta.innerHTML = `
        <h3>${nombre}</h3>
        <p>${profesion}</p>
    `;

    resultados.appendChild(tarjeta);
});