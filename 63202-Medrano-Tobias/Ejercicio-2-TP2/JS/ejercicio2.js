const cuadrado = document.getElementById("cuadrado");

const btnRojo = document.getElementById("btnRojo");

const btnAmarillo = document.getElementById("btnAmarillo");

const btnVerde = document.getElementById("btnVerde");

btnRojo.addEventListener("click", funcionBtnRojo);

btnAmarillo.addEventListener("click", funcionBtnAmarillo);

btnVerde.addEventListener("click", funcionBtnVerde);

function funcionBtnRojo() {
    cuadrado.style.backgroundColor = "red";
}

function funcionBtnAmarillo() {
    cuadrado.style.backgroundColor = "yellow"
}

function funcionBtnVerde() {
    cuadrado.style.backgroundColor = "green";
}   