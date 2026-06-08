const texto = document.getElementById("texto");
const btn = document.getElementById("cambio");

btn.addEventListener("click", () => {

    texto.textContent = "! Bienvenido al DOM !";
    texto.style.color = "navy"

})