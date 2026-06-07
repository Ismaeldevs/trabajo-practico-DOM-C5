const usuario = document.getElementById("usuario");
const preview = document.getElementById("preview");

usuario.addEventListener("input", () =>{

    const usuario = document.getElementById("usuario").value.trim();

    if(usuario != ""){

        preview.textContent = `Hola ${usuario}`;

    }else{

        preview.textContent = "Escribi tu usuario arriba"

    }

})