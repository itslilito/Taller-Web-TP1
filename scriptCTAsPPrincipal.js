var cta_inicial = document.getElementById("cta-i");
var cta_final = document.getElementById("cta-f");

cta_inicial.addEventListener("click", pasarAForm);
cta_final.addEventListener("click", pasarAForm);

function pasarAForm (event){
    window.location.href = "./form.html";
}

