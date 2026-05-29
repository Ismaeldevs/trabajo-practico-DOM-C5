const tarjeta = document.getElementById("tarjeta");
const btnToggle = document.getElementById("btnToggle");

btnToggle.addEventListener("click", function () {
   
    const esOculto = tarjeta.classList.toggle("oculto");


    if (esOculto) {
     
        btnToggle.textContent = "Mostrar";
    } else {
       
        btnToggle.textContent = "Ocultar";
    }
});