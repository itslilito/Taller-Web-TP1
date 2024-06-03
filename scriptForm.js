console.log("hola mundo :(");

var input_nombre = document.getElementById("nombre");
var input_submit = document.getElementById("submit");
var flechita_atras = document.getElementById("flechita-atras");
var flechita_atras_mobile = document.getElementById("flechita-atras-mobile");
var input_submit_mobile = document.getElementById("cta-form-mobile");


input_submit.addEventListener("click",guardarContenido);
input_submit_mobile.addEventListener("click",guardarContenido);
flechita_atras.addEventListener("click",volverAtras);
flechita_atras_mobile.addEventListener("click",volverAtras);

function guardarContenido(event){
    event.preventDefault();

    const valor_nombre = input_nombre.value;
    
    localStorage.setItem("nombreUsuario", valor_nombre);
    window.location.href= "./agradecimiento.html";
    //window.location.href = "./agradecimiento.html";

    console.log(valor_nombre);
}

function volverAtras(event){
    window.location.href = "./index.html";

}