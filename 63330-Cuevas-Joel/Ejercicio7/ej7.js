const inpNombre = document . getElementById ("inpNombre") ;
const inpProfesion = document . getElementById ("inpProfesion");
const inpColor = document . getElementById ("inpColor");
const btnGenerar = document . getElementById ("btnGenerar");
const resultados = document . getElementById ("resultados");
const avisoP = document . getElementById ("avisoP");
btnGenerar . addEventListener ("click", function () {
const nombre = inpNombre . value . trim () ;
const profesion = inpProfesion.value.trim () ;
const color = inpColor.value;

if (nombre == "" || profesion == "" || color == "") {
    avisoP . textContent = " Por favor, completa todos los campos. " ;
    return;
}
avisoP . textContent = "";

resultados.innerHTML = 
`<div class="tarjeta" style="background-color: ${color};border: 8px solid; border-radius: 8px; padding: 12px; margin-top: 10px;">
<h3>${nombre}</h3>
<p>${profesion}</p>
<button id="btnQuitar">Quitar</button>
</div>`;

    const btnQuitar = document.getElementById("btnQuitar");
    btnQuitar.addEventListener("click", function () {
        resultados.innerHTML="";
    });
    inpNombre.value = "";
    inpNombre.focus();
});
