function calcularPromedios() {
    // Obtener las edades de los estudiantes del turno mañana
    var mananaEdades = [
      parseInt(document.getElementById("manana-edad1").value),
      parseInt(document.getElementById("manana-edad2").value),
      parseInt(document.getElementById("manana-edad3").value),
      parseInt(document.getElementById("manana-edad4").value),
      parseInt(document.getElementById("manana-edad5").value)
    ];
  
    // Obtener las edades de los estudiantes del turno tarde
    var tardeEdades = [
      parseInt(document.getElementById("tarde-edad1").value),
      parseInt(document.getElementById("tarde-edad2").value),
      parseInt(document.getElementById("tarde-edad3").value),
      parseInt(document.getElementById("tarde-edad4").value),
      parseInt(document.getElementById("tarde-edad5").value),
      parseInt(document.getElementById("tarde-edad6").value)
    ];
  
    // Obtener las edades de los estudiantes del turno noche
    var nocheEdades = [
      parseInt(document.getElementById("noche-edad1").value),
      parseInt(document.getElementById("noche-edad2").value),
      parseInt(document.getElementById("noche-edad3").value),
      parseInt(document.getElementById("noche-edad4").value),
      parseInt(document.getElementById("noche-edad5").value),
      parseInt(document.getElementById("noche-edad6").value),
      parseInt(document.getElementById("noche-edad7").value),
      parseInt(document.getElementById("noche-edad8").value),
      parseInt(document.getElementById("noche-edad9").value),
      parseInt(document.getElementById("noche-edad10").value),
      parseInt(document.getElementById("noche-edad11").value)
    ];
  
    // Calcular los promedios de cada turno
    var mananaPromedio = calcularPromedio(mananaEdades);
    var tardePromedio = calcularPromedio(tardeEdades);
    var nochePromedio = calcularPromedio(nocheEdades);
  
    // Mostrar los promedios en pantalla
    document.getElementById("resultado").innerHTML = "Promedio Mañana: " + mananaPromedio.toFixed(2) + "<br>" +
                                                     "Promedio Tarde: " + tardePromedio.toFixed(2) + "<br>" +
                                                     "Promedio Noche: " + nochePromedio.toFixed(2) + "<br>";
  
    // Determinar cuál turno tiene un promedio mayor
    var mayorPromedio = "Mañana";
    if (tardePromedio > mananaPromedio && tardePromedio > nochePromedio) {
      mayorPromedio = "Tarde";
    } else if (nochePromedio > mananaPromedio && nochePromedio > tardePromedio) {
      mayorPromedio = "Noche";
    }
  
    // Mostrar el turno con el promedio mayor en pantalla
    document.getElementById("resultado").innerHTML += "El turno con un promedio mayor es: " + mayorPromedio;
  }
  
  function calcularPromedio(edades) {
    var suma = 0;
    for (var i = 0; i < edades.length; i++) {
      suma += edades[i];
    }
    return suma / edades.length;
  }
  