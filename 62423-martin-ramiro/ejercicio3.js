// 1. Seleccionamos los elementos
const inputUsuario = document.getElementById("usuario");
const inputContrasena = document.getElementById("contrasena");
const btnLogin = document.getElementById("btnLogin");
const mensaje = document.getElementById("mensaje");

// 2. Limpiar el mensaje cuando el usuario empieza a escribir de nuevo
inputUsuario.addEventListener("input", function () {
    mensaje.textContent = "";
});

inputContrasena.addEventListener("input", function () {
    mensaje.textContent = "";
});

// 3. Validacion
btnLogin.addEventListener("click", function () {
    const usuario = inputUsuario.value.trim();
    const contrasena = inputContrasena.value.trim();

    // campos vacíos
    if (usuario === "" || contrasena === "") {
        mensaje.textContent = "Completá todos los campos.";
        mensaje.style.color = "red";
    } 
    // Caso B: Si las credenciales son las correctas (admin y 1234)
    else if (usuario === "admin" && contrasena === "1234") {
        mensaje.textContent = "¡Bienvenido, admin!";
        mensaje.style.color = "green";
    } 
    //combinación incorrecta
    else {
        mensaje.textContent = "Credenciales incorrectas.";
        mensaje.style.color = "red";
    }
});