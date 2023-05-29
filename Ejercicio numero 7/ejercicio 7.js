function calculanotafinal() {
    var nota1 =  parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var ponderacion1 =  parseFloat(document.getElementById("ponderacion1").value);
    var ponderacion2 = parseFloat(document.getElementById("ponderacion2").value);
    var notaFinal = document.getElementById("resultado");


    if(!isNaN(nota1) && !isNaN(nota2) && !isNaN(ponderacion1) && !isNaN(ponderacion2)){
        let resul=(nota1*(ponderacion1/100)) + (nota2*(ponderacion2/100));
        notaFinal.textContent = resul.toFixed(2);
    }else(
        notaFinal.textContent = "Un dato que ingreso no es numerico"
    )
}