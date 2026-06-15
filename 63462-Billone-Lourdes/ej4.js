const inputNombre = document.getElementById("inputNombre");
const preview = document.getElementById("preview");

// Escuchá el evento " input " del campo de texto
inputNombre.addEventListener("input", function () {
  // Si el campo est á vac ío mostrar " Escribi tu nombre arriba
  if (inputNombre.value.trim() === "") {
    preview.textContent = "Escribí tu nombre arriba";
  } else {
    // Si no mostrar " Hola, [ nombre ]!"
    preview.textContent = `Hola ${inputNombre.value}`;
  }
});
