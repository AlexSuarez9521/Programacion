/*5.1.	Realice un programa que imprima el número mayor, 
el número menor entre 10 números. El sistema debe declarar cada variable y 
su valor debe ser calculado aleatoriamente por PHP. Se debe realizar con la sentencia IF*/

let array = [Math.round(Math.random()*100)];
let No_mayor = array[0];
let No_menor = array[0];

for(i = 1; i <= 10; i++){

    Numero = Math.round(Math.random()*100); //generamos numeros aleatorios entre 0 y 100
    array[i] = Numero; //guardamos el número aleatorio en el array
}

console.log(array);
 
for(i = 0; i < array.length; i++){

    if (array[i] > No_mayor){
        No_mayor = array[i];
    }

    if (array[i] < No_menor){
        No_menor = array[i];
    }
}

console.log('El No. mayor es', No_mayor);
console.log('El No. menor es', No_menor);