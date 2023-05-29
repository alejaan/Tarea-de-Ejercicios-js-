function imprimir(texto, color) {
    var resultadoh = document.getElementById("resultado");
    resultadoh.innerHTML = "<h3 style='color: " + color + "'>" + texto + "</h3>";
  }


function calcular(){
    let nombre =       document.querySelector("#nombre");
    let salario =      parseFloat(document.querySelector("#sal").value);
    let categoria =    document.querySelector("#cat");
    var resultado =    ""; 
    var rs = 0;
    var color="";

    if(!isNaN(salario)){
       switch(categoria.value){
        case "A":
            rs = salario * 0.15;
            resultado = "El salario de " + nombre.value + " Es: $" + salario.toFixed(2) + ", De categoria: " + categoria.value + " Y su aumento es de: $" + rs.toFixed(2);
            color="black";
            break;       
        case "B":
            rs = salario * 0.30;
            resultado = "El salario de " + nombre.value + " Es: $" + salario.toFixed(2) + ", De categoria: " + categoria.value + " Y su aumento es de: $" + rs.toFixed(2);
            color="black";
            break;
        case "C":
            rs = salario * 0.10;
            resultado = "El salario de " + nombre.value + " Es: $" + salario.toFixed(2) + ", De categoria: " + categoria.value + " Y su aumento es de: $" + rs.toFixed(2);
            color="black";
            break;
        case "D":
            rs = salario * 0.20;
            resultado = "El salario de " + nombre.value + " Es: $" + salario.toFixed(2) + ", De categoria: " + categoria.value + " Y su aumento es de: $" + rs.toFixed(2);
            color="black";
            break;
        default:
            resultado = "Selecciona una categoria!!!";
            color="red";
       }
    }else{
        resultado = "Ingrese salario númerico!!!";
        color="red";
    }
    
    imprimir(resultado,color);   
}