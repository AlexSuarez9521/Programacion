/*5.8.	Cargar un vector donde su tamaño sea un número aleatorio dado entre 1 y 20. 
Y en cada posición del arreglo cargarlo con otro número aleatorio dado también en el mismo rango. 
Una vez cargado debe recorrerlo y mostrar:
Todos los números cargado, Suma números pares, 
Suma de números impares, Total de números pares, total de números impares*/

let Longitud_vector = Math.round(Math.random()*20);
let array = [Math.round(Math.random()*20)];
let No_par = new Array();
let No_impar = new Array();
let Suma_pares = 0;
let Suma_impares = 0;

for(i = 1; i <= Longitud_vector; i++){

    Numero = Math.round(Math.random()*20); //generamos numeros aleatorios entre 0 y 100
    array[i] = Numero; //guardamos el número aleatorio en el array

    //Hallamos los numeros pares e impares del array
    if(array[i] % 2 == 0){
        
        //Llenamos el array de los numeros pares
        No_par.push(array[i]);
       
    }else{
        
        //Llenamos el array de los numeros impares
        No_impar.push(array[i]);
    }
}

Suma_pares = No_par.reduce(function(a, b){return a + b})
Suma_impares = No_impar.reduce(function(a, b){return a + b})

console.log('La longitud del vector es',Longitud_vector);
console.log('Los datos generados aleatoriamente para el vector son',array);
console.log('Los numeros pares son',No_par, 'longitud del vector',No_par.length);
console.log('Los suma de los numeros pares es',Suma_pares);
console.log('Los numeros impares son',No_impar, 'longitud del vector',No_impar.length);
console.log('Los suma de los numeros impares es',Suma_impares);