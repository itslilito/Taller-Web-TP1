console.log("hola mundo :(");

var input_nombre = document.getElementById("nombre");
var input_submit = document.getElementById("submit");
var flechita_atras = document.getElementById("flechita-atras");

input_submit.addEventListener("click",guardarContenido);
flechita_atras.addEventListener("click",volverAtras);

function guardarContenido(event){
    event.preventDefault();
    console.log("hice click");

    var valor_nombre = input_nombre.value;
    
    window.location.href = "./agradecimiento.html";

    console.log(valor_nombre);
}

function volverAtras(event){
    window.location.href = "./index.html";
}