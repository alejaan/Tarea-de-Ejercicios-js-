console.log(document);
function capturarEdad(){
    let resultado = document.querySelector('#resultado');
    let edad = document.querySelector('.edad');

    (resultado) && (edad.value >= 18) ? resultado.textContent = "Eres mayor de edad" : resultado.textContent = "Eres menor de edad";
}
