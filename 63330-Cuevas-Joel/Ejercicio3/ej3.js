const btnLogin = document.getElementById("btnLogin");
const mensaje = document.getElementById("mensaje");
const usuario = document.getElementById("usuario");
const contrasena = document.getElementById("contrasena");
usuario.addEventListener("input", function() {
    mensaje.textContent = "";
});
contrasena.addEventListener("input", function() {
    mensaje.textContent = ""; 
}); 
btnLogin.addEventListener("click", function() {
    const user = usuario.value.trim();
    const pass = contrasena.value.trim();
    if (user === "admin" && pass === "1234") {
        mensaje.textContent = "Bienvenido, admin!";
        mensaje.style.color = "green";
    }
    else {
        mensaje.textContent = "Credenciales incorrectas"    ;
        mensaje.style.color = "red";
    }});