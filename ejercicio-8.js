// Crea un cronómetro que permita ponerlo en marcha, pararlo y resetearlo.

'use strict';


let hours = 0;
let minutes = 0;
let seconds = 0;
let corriendo=false;


const h1 = document.querySelector('h1');
const body = document.body;
const start = document.querySelector("#start");
const reset = document.querySelector("#reset");
var crono;

const formatHour = (hours, minutes, seconds) => {
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Si el segundo es par mostramos los dos puntos, de lo contrario no.
    if (seconds % 2 === 0) {
        return `${hours}:${minutes}:${seconds}`;
    } else {
        return `${hours} ${minutes} ${seconds}`;
    }
};



reset.addEventListener('click', () => {
    hours = 0;
    minutes = 0;
    seconds = 0;
    h1.textContent = formatHour(hours, minutes, seconds);  
});

start.addEventListener('click', () => {
    if (!corriendo){
        crono= setInterval(() => {
            seconds=seconds+1;
            if (seconds===60){
                seconds=0;
                minutes=minutes+1;
            }
            if (minutes===60){
                minutes=0;
                hours=hours+1;
            }
            corriendo=true;
        
            // Asignamos la hora al h1.
            h1.textContent = formatHour(hours, minutes, seconds);        
        }, 1000);
    } else{
        clearInterval(crono);
        corriendo=false;
    }   



});








