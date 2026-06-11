const inputUsuario = document.getElementById('usuario');
const inputContraseña = document.getElementById('password');
const btnLogin = document.getElementById('btnLogin');
const msjTexto = document.getElementById('mensaje');


inputUsuario.addEventListener("click", function() {
    inputUsuario.value = "";
});

inputContraseña.addEventListener('click', function() {
    inputContraseña.value = "";
});

btnLogin.addEventListener("click", () => {
    const usuario = inputUsuario.value.trim();
    const password = inputContraseña.value.trim();

    if(usuario === "" || password === "") {
        msjTexto.textContent = "Completá todos los campos."
        msjTexto.style.color = "red";
    } else if(usuario === "admin" && password === "1234") {
        msjTexto.textContent = "¡Bienvenido, admin!";
        msjTexto.style.color = "green";
    } else {
        msjTexto.textContent = "Credenciales Incorrectas."
        msjTexto.style.color = "orange";
    }
    event.preventDefault(); 
})