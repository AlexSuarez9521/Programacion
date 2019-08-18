/*5.5.	Realice un programa que imprima el número mayor, el número menor, cuales son pares, 
cuales son impares entre 10 números calculados aleatoriamente. El sistema debe declarar cada variable 
y su valor debe ser calculado aleatoriamente por PHP. Se debe realizar con la sentencia IF*/

//Creamos un for para generar 10 numeros aleatorios y guardarlos en un arreglo

let array = [Math.round(Math.random()*100)];

for(i = 1; i <= 10; i++){

    Numero = Math.round(Math.random()*100); //generamos numeros aleatorios entre 0 y 100
    array[i] = Numero; //guardamos el número aleatorio en el array
}

//vamos halla el numero mayor,menor,par e impar de nuestro array generado

let No_mayor = array[0];
let No_menor = array[0];
let No_par = new Array();
let No_impar = new Array();
 
for(i = 0; i < array.length; i++){
    
    //Hallamos el numero mayor del array
    if (array[i] > No_mayor){
        No_mayor = array[i];
    }
    
    //Hallamos el numero menor del array
    if (array[i] < No_menor){
        No_menor = array[i];
    }
    
    //Hallamos los numeros pares e impares del array
    if(array[i] % 2 == 0){
        
        //Llenamos el array de los numeros pares
        No_par.push(array[i]);
       
    }else{
        
        //Llenamos el array de los numeros impares
        No_impar.push(array[i]);
    }
}

console.log('Array generado aleatoriamente',array);
console.log('El No. mayor es', No_mayor);
console.log('El No. menor es', No_menor);
console.log('Los numeros pares del array son',No_par);
console.log('Los numeros impares del array son',No_impar);


