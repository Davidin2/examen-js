// Ejercicio 2
// Crea un programa que imprima cada 5 segundos el tiempo 
// desde la ejecución del mismo. Formatea el tiempo para que 
// se muestren los segundos, los minutos, las horas y los días desde la ejecución.
'use strict';

const interval =5000;
let time = 0;
const minute=60;
const hour=60*60;
const day=24*60*60;

setInterval(() => {
    time =time+interval/1000; //incrementamos el tiempo
    let timeTemp=time; //usamos un temporal para operar con el 
    const dias = Math.floor(timeTemp/day);
    timeTemp=timeTemp-dias*day; //restamos los dias
    const horas = Math.floor(timeTemp/hour);
    timeTemp=timeTemp-horas*hour; //restamos las horas
    const minutos= Math.floor(timeTemp/minute);
    timeTemp=timeTemp-minutos*minute; //restamos los minutos
    const segundos=timeTemp;
   console.log(`Han transcurrido ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos`);
}, interval);


