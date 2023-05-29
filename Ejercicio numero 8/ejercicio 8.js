function convertirTemperatura() {
    var temperaturaCelsius = parseFloat(document.getElementById('celsius').value);
    var temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;

    document.getElementById('resultado').innerHTML = "Temperatura en Fahrenheit: " + temperaturaFahrenheit;

    if (temperaturaFahrenheit >= 14 && temperaturaFahrenheit < 32) {
      document.getElementById('mensaje').innerHTML = "Temperatura baja";
    } else if (temperaturaFahrenheit >= 32 && temperaturaFahrenheit < 68) {
      document.getElementById('mensaje').innerHTML = "Temperatura adecuada";
    } else if (temperaturaFahrenheit >= 68 && temperaturaFahrenheit < 96) {
      document.getElementById('mensaje').innerHTML = "Temperatura alta";
    } else {
      document.getElementById('mensaje').innerHTML = "Temperatura desconocida";
    }
  }