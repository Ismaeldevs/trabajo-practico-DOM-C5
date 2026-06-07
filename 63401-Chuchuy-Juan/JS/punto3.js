const btnIngresar = document.getElementById("btnIngresar")
const inpUsuario = document.getElementById("inpUser")
const inpContra = document.getElementById("inpPassword")
const err = document.getElementById("mensaje")


document.addEventListener("DOMContentLoaded",() => {

    err.style.display = "none"

})




inpContra.addEventListener("input", () => {

    err.style.display = "none"

})

inpUsuario.addEventListener("input", () => {

    err.style.display = "none"

})

btnIngresar.addEventListener("click", () =>{

const usuario = document.getElementById("inpUser").value.trim()
const contra = document.getElementById("inpPassword").value.trim()


    if(usuario === "" || contra === ""){

        err.textContent = "Datos incompletos."
        err.style.color = "red"    
        err.style.display = "block"

    }else if(usuario != "admin" || contra != "1234"){

        err.textContent = "Credenciales incorrectas."
        err.style.color = "red"
        err.style.display = "block"

    }else{

        err.textContent = "Bienvenido Admin!."
        err.style.color = "green"
        err.style.display = "block"

    }



})