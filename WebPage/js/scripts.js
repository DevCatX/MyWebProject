window.onload = iniciar;

function iniciar() {
    let btnShow = document.getElementById("btnShow");
    btnShow.addEventListener("click", clickBtnShow);
}

function clickBtnShow() {
    alert("Conexion exitosa");
}