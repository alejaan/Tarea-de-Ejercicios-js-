function calcular(){
   let nun1 = parseInt(document.querySelector("#nun1").value);
   let nun2 = parseInt(document.querySelector("#nun2").value); 
   let resultado = document.querySelector("#resultado");

   (nun1 > nun2) ? resultado.textContent = "El numero " + nun1 + " es mayor que " + nun2: resultado.textContent = "El numero " + nun2 + " es mayor que " + nun1;

}