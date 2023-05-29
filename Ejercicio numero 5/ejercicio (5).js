    let buton = document.querySelector('button'); //<button>
    buton.addEventListener('click', () => {
        /** inicio de variables */
        let precio = document.querySelector('.precio').value;//input
        let coche = document.querySelector('#coches'); //select
        let parrafo = document.querySelector('p'); //<p>
        let descuento = 0;
        console.log(precio);
        switch(coche.value){
            case "FORD FIESTA":
                descuento = precio * 0.95; //5% => 0.05 150
                //descuento = (precio * 0.05) - precio
                parrafo.innerHTML = `<b>Tu total a pagar ${descuento} y se te desconto el 5%</b>`;
                //15% (aumento) = 1.15
                //sueldo * 1.15 = 575
                //(sueldo * 0.15) + sueldo = 575
                break;
            case "FORD FOCUS":
                descuento = precio * 0.90; //5% => 0.05 150
                //descuento = (precio * 0.05) - precio
                parrafo.innerHTML = `<b>Tu total a pagar ${descuento} y se te desconto el 10%</b>`;
                //15% (aumento) = 1.15
                //sueldo * 1.15 = 575
                //(sueldo * 0.15) + sueldo = 575
                break;
            case "FORD SCAPE":
                descuento = precio * 0.80; //5% => 0.05 150
                //descuento = (precio * 0.05) - precio
                parrafo.innerHTML = `<b>Tu total a pagar ${descuento} y se te desconto el 20%</b>`;
                //15% (aumento) = 1.15
                //sueldo * 1.15 = 575
                //(sueldo * 0.15) + sueldo = 575
                break;
            default:
                parrafo.textContent = "Elige un tipo de coche";
        }
    })