function calcularNote(){
    let carnet =        document.querySelector("#carnet");
    let nombre =        document.querySelector("#nombre");
    let examen =        parseFloat(document.querySelector("#examen").value);
    let tareas =        parseFloat(document.querySelector("#tareas").value);
    let asistencia =    parseFloat(document.querySelector("#asistencia").value);
    let investigacion = parseFloat(document.querySelector("#investigacion").value);
    let notaFinal =     document.querySelector("#resultado");

    if(!isNaN(examen) && !isNaN(tareas) && !isNaN(asistencia) && !isNaN(investigacion)){
        let resul=(examen*0.20) + (tareas*0.40) + (asistencia*0.10) + (investigacion*0.30);
        notaFinal.textContent = "Nombre: " + nombre.value.toUpperCase() + "\n" +
            "Carnet: " + carnet.value + "\n" +
            "Nota Final: " + resul.toFixed(2);
    }else(
        notaFinal.textContent = "Un dato que ingreso no es numerico"
    )
    
}

    