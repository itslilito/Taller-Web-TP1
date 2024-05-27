var b_home = document.getElementById("bHome");

const valorRecibido = new URLSearchParams(window.location.search).get("valor_nombre");
var nombre_usuario = document.getElementById("nombre-agradecimiento");
b_home.addEventListener("click", pasarAForm);

nombre_usuario.innerHTML = valorRecibido;

function pasarAForm (event){
    window.location.href = "./index.html";
}

