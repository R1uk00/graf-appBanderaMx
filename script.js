const verdeRange = document.getElementById("verdeRange");
const blancoRange = document.getElementById("blancoRange");
const rojoRange = document.getElementById("rojoRange");

const verde = document.getElementById("verde");
const blanco = document.getElementById("blanco");
const rojo = document.getElementById("rojo");

const verdeValue = document.getElementById("verdeValue");
const blancoValue = document.getElementById("blancoValue");
const rojoValue = document.getElementById("rojoValue");

const resetBtn = document.getElementById("resetBtn");

function actualizarColor(elemento, valor, label) {
    elemento.style.filter = `brightness(${valor}%)`;
    label.textContent = valor + "%";
}

verdeRange.addEventListener("input", () => {
    actualizarColor(verde, verdeRange.value, verdeValue);
});

blancoRange.addEventListener("input", () => {
    actualizarColor(blanco, blancoRange.value, blancoValue);
});

rojoRange.addEventListener("input", () => {
    actualizarColor(rojo, rojoRange.value, rojoValue);
});

resetBtn.addEventListener("click", () => {
    verdeRange.value = 100;
    blancoRange.value = 100;
    rojoRange.value = 100;

    actualizarColor(verde, 100, verdeValue);
    actualizarColor(blanco, 100, blancoValue);
    actualizarColor(rojo, 100, rojoValue);
});
