
 const  inpNombre     = document.getElementById("inpNombre");

 const  inpProfesion = document.getElementById("inpProfesion"); 

 const  inpColor      = document.getElementById("inpColor"); 

 const  btnGenerar    = document.getElementById("btnGenerar");

  const  resultados    = document.getElementById("resultados");

   const  avisoP         = document.getElementById("avisoP");

   btnGenerar.addEventListener("click", function () {
    
    const  nombre     = inpNombre.value.trim();
    const  profesion = inpProfesion.value.trim();    
    const  color    = inpColor.value;


      if(!nombre || !profesion ){

            avisoP.textContent = "Faltan datos."

      }else{

            avisoP.textContent = "";

            const div = document.createElement("div");
            const h3 = document.createElement("h3");
            const p = document.createElement("p");
            const btnEliminar = document.createElement("button");
      
            h3.textContent = nombre;
            p.textContent = profesion;
            btnEliminar.textContent = "Eliminar Tarjeta";
            div.style.borderLeft = `4px solid ${color}`;
            div.style.padding = '4px';

            btnEliminar.addEventListener('click', function (){

                  div.remove();

            })


            div.appendChild(h3);
            div.appendChild(p);
            div.appendChild(btnEliminar);
            resultados.appendChild(div);
            
      }      

});