var inputUsuario=document.getElementById("usuario")
var inputContraseña=document.getElementById("contraseña")
var btnLogin=document.getElementById("btnLogin")
var mensaje=document.getElementById("mensaje")

inputUsuario.addEventListener("input",function(){
    mensaje.innerHTML=""
})

inputContraseña.addEventListener("input",function(){
    mensaje.innerHTML=""
})
btnLogin.addEventListener("click",function(){
    var usuario=inputUsuario.value.trim()
    var contraseña=inputContraseña.value.trim()
if(usuario.trim()==""||contraseña.trim()==""){
    mensaje.style.background="red"
    mensaje.textContent="No deje los campos vacios,Ingrese datos correctamente"

}else{
    mensaje.style.background="green"
    mensaje.textContent="Bienvenido "+usuario
}
})




//ejercicio 4
var inputNombre=document.getElementById("InputNombre")
var preview=document.getElementById("preview")

inputNombre.addEventListener("input",function(){
    if(inputNombre==""){
        preview.textContent="Ingresa tu nombre arriba"
    }else{
        var nombre=inputNombre.value
        preview.textContent="Hola,"+nombre
    }
})