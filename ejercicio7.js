/*5.7.	solicitar 8 números diferentes desde un formulario  
guardar los números en un arreglo e imprimir la sumatoria de los 8 números*/


let array = [Math.round(Math.random()*5)];
let Suma_total = 0;

for(i = 1; i <= 8; i++){

    Numero = Math.round(Math.random()*5); //generamos las notas aleatorias entre 0 y 5
    array[i] = Numero; //guardamos las notas aleatorias en el array
}

Suma_total = array.reduce(function(a, b){return a + b})

console.log('Array generado aleatoriamente', array);
console.log('La suma total del array es:',Suma_total);
