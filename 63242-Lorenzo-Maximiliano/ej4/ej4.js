const inputNombre=document.getElementById("inputNombre");
const preview=document.getElementById("preview");

inputNombre.addEventListener("input", function(){
    if (inputNombre.value==="")
    {
        preview.textContent="Escribi tu nombre arriba";

    }
    else
    {
        preview.textContent="hola " + inputNombre.value + "!";

    }
});