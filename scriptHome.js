var b_home = document.getElementById("bHome");

const valorRecibido = new URLSearchParams(window.location.search).get("valor_nombre");
var placeholderNombre = document.getElementById("nombre-agradecimiento");
var nombre_usuario = localStorage.getItem("nombreUsuario");
b_home.addEventListener("click", pasarAForm);

placeholderNombre.innerHTML = nombre_usuario;
console.log(nombre_usuario);

function pasarAForm (event){
    window.location.href = "./index.html";
}

