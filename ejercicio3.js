/*5.3.	Busque 3 números aleatoriamente y defina si el número encontrado 
es mayor a 50, menor de 20 o es un numero negativo*/

let No_aleatorio1 = Math.round(Math.random()*100);
let No_aleatorio2 = Math.round(Math.random()*100);
let No_aleatorio3 = Math.round(Math.random()*100);

if(No_aleatorio1 >=50){
    console.log('El primer No. es mayor a 50, No. generado', No_aleatorio1);
}else if(No_aleatorio1 <=20){
    console.log('El primer No. es menor a 20 generado', No_aleatorio1);
}
else if(No_aleatorio1 <0){
    console.log('El primer No. es negativo generado', No_aleatorio1);
}

if(No_aleatorio2 > 50){
    console.log('El segundo No. es mayor a 50, No. generado', No_aleatorio2);
}else if(No_aleatorio2 <20){
    console.log('El segundo No. es menor a 20 generado', No_aleatorio2);
}
else if(No_aleatorio2 <0){
    console.log('El segundo No. es negativo generado', No_aleatorio2);
}

if(No_aleatorio3 > 50){
    console.log('El tercer No. es mayor a 50, No. generado', No_aleatorio3);
}else if(No_aleatorio3 <20){
    console.log('El tercer No. es menor a 20 generado', No_aleatorio3);
}
else if(No_aleatorio3 <0){
    console.log('El tercer No. es negativo generado', No_aleatorio3);
}
