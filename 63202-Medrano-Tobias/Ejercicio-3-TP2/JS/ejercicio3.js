const  usu = document.getElementById("usuario");
const pass = document.getElementById("contrasena");
const mensaje = document.getElementById("mensaje");
const btnLogin = document.getElementById("btnLogin");


usu.addEventListener("input", function() {
    mensaje.textContent = "";});

pass.addEventListener("input", function(){
    mensaje.textContent = "";
});

btnLogin.addEventListener("click", function() {
    if (usu.value.trim() === "" && pass.value.trim() === "") {
        mensaje.textContent = "¡COMPLETA TODOS LOS CAMPOS!";
        mensaje.style.color = "red";
    }else if (usu.value.trim() === "admin" && pass.value.trim() === "1234") {
        mensaje.textContent = `¡Bienvenido, ${usu.value}!`;
        mensaje.style.color = "green";
    }else {
        mensaje.textContent = "CREDENCIALES INCORRECTAS!";
        mensaje.style.color = "red";
    }
});

