/*5.2.	Realizar un programa que reciba un valor numérico y dependiendo del número arroje el
 día del MES que corresponda para septiembre 2018. EL sistema se debe 
 desarrollar con sentencia Switch*/
 
 let dia = 2;

 switch (dia) {
 
     case 4:
     case 11:
     case 18:
     case 25:
       console.log('El día', dia, 'de septiembre del 2018 fue un Lunes');
       break;
     case 5:
     case 12:
     case 19:
     case 26:
       console.log('El día', dia, 'de septiembre del 2018 fue un Martes');
       break;
     case 6:
     case 13:
     case 20:
     case 27:  
       console.log('El día', dia, 'de septiembre del 2018 fue un Miércoles');
       break;
     case 7:
     case 14:
     case 21:
     case 28:
       console.log('El día', dia, 'de septiembre del 2018 fue un Jueves');
       break;
     case 1:
     case 8:
     case 15:
     case 22:
     case 29:
       console.log('El día', dia, 'de septiembre del 2018 fue un Viernes');
       break;
     case 2:
     case 9:
     case 16:
     case 23:
     case 30:        
       console.log('El día', dia, 'de septiembre del 2018 fue un Sabádo');
       break;
     case 3:
     case 10:
     case 17:
     case 24:
       console.log('El día', dia, 'de septiembre del 2018 fue un Domingo');
   }