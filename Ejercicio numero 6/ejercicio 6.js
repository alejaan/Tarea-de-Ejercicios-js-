function calcularDescuento() {
    var ciudad = document.getElementById("ciudad").value;
    var destino = document.getElementById("destino").value;
    var descuento = 0;

    if (ciudad === "Palma" && destino === "Costa del Sol") {
        descuento = 5;
    }
    
    if (destino === "Panchimalco") {
        descuento = 10;
    }else if (destino === "Puerto el Triunfo") {
        descuento = 15;
    }

    var resultado = "No se aplica descuento.";

    if (descuento > 0) {
        resultado = "Descuento: " + descuento + "%";
    }

    document.getElementById("resultado").textContent = resultado;
}
