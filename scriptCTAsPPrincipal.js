var cta_inicial = document.getElementById("cta-i");
var cta_final = document.getElementById("cta-f");
var cta_mobile_inicial = document.getElementById("cta-m-i");
var cta_mobile_final = document.getElementById("cta-m-f");

cta_inicial.addEventListener("click", pasarAForm);
cta_final.addEventListener("click", pasarAForm);
cta_mobile_inicial.addEventListener("click", pasarAForm);
cta_mobile_final.addEventListener("click", pasarAForm);

function pasarAForm (event){
    window.location.href = "./form.html";
}

