const inputUsuario = document.getElementById("usuario");
const inputContrasena = document.getElementById("contrasena");
const btnLogin = document.getElementById("btnLogin");
const mensaje = document.getElementById("mensaje");

inputUsuario.addEventListener("input", () => {
    mensaje.textContent = "";
});

inputContrasena.addEventListener("input", () => {
    mensaje.textContent = "";
});

btnLogin.addEventListener("click",() => {
    const usuario = inputUsuario.value.trim();
    const contraseña = inputContrasena.value.trim();

    if (usuario === "" || contraseña === "") {
        mensaje.textContent = "Por favor, ingrese su usuario y contraseña.";
        mensaje.style.color = "red";

    } else if (usuario === "admin" && contraseña === "1234") {
        mensaje.textContent = "¡Bienvenido, admin!";
        mensaje.style.color = "green";

    } else {
        mensaje.textContent = "Usuario o contraseña incorrectos.";
        mensaje.style.color = "red";
    }

});



