const inputNombre = document.getElementById("inputNombre");
const btnAgregar = document.getElementById("btnAgregar");
const aviso = document.getElementById("aviso");
const listaInvitados = document.getElementById("listaInvitados");

btnAgregar.addEventListener("click", function() {
    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        aviso.textContent = "Por favor, escribí un nombre válido.";
        inputNombre.focus();
        return;
    }

    aviso.textContent = "";

    const nuevoLi = document.createElement("li");
    nuevoLi.textContent = nombre + " ";

    const btnQuitar = document.createElement("button");
    btnQuitar.textContent = "Quitar";
    
    btnQuitar.addEventListener("click", function() {
        nuevoLi.remove();
    });

    nuevoLi.appendChild(btnQuitar);
    listaInvitados.appendChild(nuevoLi);

    inputNombre.value = "";
    inputNombre.focus();
});


// --- EJERCICIO 6: ALTERNAR CONTENIDO ---
const tarjeta = document.getElementById("tarjeta");
const btnToggle = document.getElementById("btnToggle");

btnToggle.addEventListener("click", function() {
    tarjeta.classList.toggle("oculto");

    if (tarjeta.classList.contains("oculto")) {
        btnToggle.textContent = "Mostrar";
    } else {
        btnToggle.textContent = "Ocultar";
    }
});


// --- EJERCICIO 7: TARJETAS DE PERFIL ---
const inpNombre = document.getElementById("inpNombre");
const inpProfesion = document.getElementById("inpProfesion");
const inpColor = document.getElementById("inpColor");
const btnGenerar = document.getElementById("btnGenerar");
const resultados = document.getElementById("resultados");
const avisoP = document.getElementById("avisoP");

btnGenerar.addEventListener("click", function() {
    const nombre = inpNombre.value.trim();
    const profesion = inpProfesion.value.trim();
    const color = inpColor.value;

    if (nombre === "" || profesion === "") {
        avisoP.textContent = "Por favor, completá el nombre y la profesión.";
        return;
    }

    avisoP.textContent = "";

    const nuevaTarjeta = document.createElement("div");
    nuevaTarjeta.style.borderLeft = "4px solid " + color;
    nuevaTarjeta.style.borderRadius = "8px";
    nuevaTarjeta.style.padding = "12px";
    nuevaTarjeta.style.marginTop = "10px";

    const h3Nombre = document.createElement("h3");
    h3Nombre.textContent = nombre;

    const pProfesion = document.createElement("p");
    pProfesion.textContent = profesion;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar tarjeta";
    
    btnEliminar.addEventListener("click", function() {
        nuevaTarjeta.remove();
    });

    nuevaTarjeta.appendChild(h3Nombre);
    nuevaTarjeta.appendChild(pProfesion);
    nuevaTarjeta.appendChild(btnEliminar);
    
    resultados.appendChild(nuevaTarjeta);

    inpNombre.value = "";
    inpProfesion.value = "";
    inpNombre.focus();
});