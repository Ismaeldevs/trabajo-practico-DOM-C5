
const formulario = document.getElementById("loginForm");
const inputUsuario = document.getElementById("usuario");
const inputPassword = document.getElementById("password");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", (e) => {
    e.preventDefault(); 


    const usuario = inputUsuario.value.trim();
    const password = inputPassword.value.trim();

    if (usuario === "" || password === "") {
        mensaje.textContent = "Completá todos los campos.";
        mensaje.className = "error"; // Aplica color rojo de CSS
    } 
    else if (usuario === "admin" && password === "1234") {
        mensaje.textContent = "Bienvenido, admin";
        mensaje.className = "exito"; 
    } 

    else {
        mensaje.textContent = "Credenciales incorrectas.";
        mensaje.className = "error"; 
    }
});

inputUsuario.addEventListener("input", limpiarMensaje);
inputPassword.addEventListener("input", limpiarMensaje);

function limpiarMensaje() {
    mensaje.textContent = ""; // Borra el texto del mensaje
}