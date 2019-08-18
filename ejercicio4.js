/*5.4.	Identifique si un número es par o impar. El sistema debe recibir una 
variable entera que se calcule aleatoriamente*/

let Numero = Math.round(Math.random()*100);

let Tipo=(Numero%2)?"Impar":"Par";

console.log('El No. ',Numero, 'es', Tipo);