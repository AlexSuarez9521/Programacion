/*5.6.	 Realice un programa que permita calcular y dar como salida el promedio general de una curso, 
tomando en cuenta que está compuesto por 25 estudiantes y que se tiene la nota definitiva de cada uno de ellos. 
(Se debe realizar con ciclo for, while y do/while)*/

let No_estudiantes = 25;
let array = [Math.round(Math.random()*5)];
let Suma_notas = 0;

for(i = 1; i <= No_estudiantes; i++){

    Notas = Math.round(Math.random()*5); //generamos las notas aleatorias entre 0 y 5
    array[i] = Notas; //guardamos las notas aleatorias en el array
}

Suma_notas = array.reduce(function(a, b){return a + b})

console.log('Array generado aleatoriamente', array);
console.log('La suma de todas las notas son:',Suma_notas);
console.log('El promedio total del salón es:',Suma_notas/No_estudiantes);