const btnToggle = document.getElementById("btnToggle")
const tarjeta = document.getElementById("tarjeta")

btnToggle.addEventListener("click", () =>{
    tarjeta.classList.toggle("oculto");
    if(btnToggle.textContent === "Mostrar"){

        btnToggle.textContent = "Ocultar";


    }else if(btnToggle.textContent === "Ocultar"){
            
        btnToggle.textContent = "Mostrar";

    }

})