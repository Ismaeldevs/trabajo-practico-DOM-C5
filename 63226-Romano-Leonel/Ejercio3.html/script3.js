const inputUsuario = document.getElementById("usuario");
const inputContraseña = document.getElementById("contraseña");
const btnLogin = document.getElementById("btnLogin");
const mensaje = document.getElementById("mensaje");

inputUsuario.addEventListener("input", function () {
    mensaje.textContent = ("");
});

inputContraseña.addEventListener("input", function (){
    mensaje.textContent = ("");
});

btnLogin.addEventListener("click", function (){
    const usuario = inputUsuario.value.trim();
    const contraseña = inputContraseña.value.trim();

    if(usuario === "" || contraseña === ""){
        mensaje.textContent = "Completá todos los campos";
        mensaje.style.color = "Red";
    }
    else if(usuario === "admin" && contraseña === "1234"){
        mensaje.textContent = "¡Bienvenido Admin!";
        mensaje.style.color = "green";
    }
    else{
        mensaje.textContent = "Credenciales incorrectas";
        mensaje.style.color = "red";
    }

});

