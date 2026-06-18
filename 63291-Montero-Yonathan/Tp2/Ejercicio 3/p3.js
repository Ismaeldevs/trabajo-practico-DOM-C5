const inputUsuario = document . getElementById ("usuario");
const inputContrasena = document . getElementById ("contrasena");
const btnLogin = document . getElementById ("btnLogin");
const mensaje = document . getElementById ("mensaje");



inputUsuario.addEventListener ("input", function () {
mensaje.textContent=""
 }) ;

inputContrasena.addEventListener ("input", function () {
mensaje.textContent=""
}) ;

 btnLogin.addEventListener ("click", function () {
 const usuario = inputUsuario.value.trim() ;
 const contrasena = inputContrasena.value.trim() ;

 if (usuario === "" || contrasena === ""){
    mensaje.textContent="Credenciales Incorrectas"
    mensaje.style.color="red"
 
 }
 else {
    mensaje.textContent="Bienvenido,Admin!!!"
    mensaje.style.color="green"


 }
 }) ;