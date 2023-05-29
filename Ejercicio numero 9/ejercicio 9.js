function analizarValores() {
  var valores = [];
  var cantidadNegativos = 0;
  var cantidadPositivos = 0;
  var cantidadMultiplos15 = 0;
  var acumuladoPares = 0;

  for (var i = 1; i <= 10; i++) {
    var valor = parseInt(prompt("Ingrese el valor #" + i));

    valores.push(valor);

    if (valor < 0) {
      cantidadNegativos++;
    } else if (valor > 0) {
      cantidadPositivos++;
    }

    if (valor % 15 === 0) {
      cantidadMultiplos15++;
    }

    if (valor % 2 === 0) {
      acumuladoPares += valor;
    }
  }

  document.getElementById('resultadoNegativos').innerHTML = "Cantidad de valores negativos: " + cantidadNegativos;
  document.getElementById('resultadoPositivos').innerHTML = "Cantidad de valores positivos: " + cantidadPositivos;
  document.getElementById('resultadoMultiplos15').innerHTML = "Cantidad de múltiplos de 15: " + cantidadMultiplos15;
  document.getElementById('resultadoAcumuladoPares').innerHTML = "Valor acumulado de números pares: " + acumuladoPares;
}