// Crea una malla de cuadrados de tal forma que el color de 
// cada uno de ellos se determine de forma aleatoria y vaya cambiando cada segundo.

// Añade también un botón que permita añadir un nuevo 
// cuadrado a la maya con las mismas propiedades que los anteriores.

'use strict';


function getRandom(max) {
    return Math.round(Math.random() * max);
}

setInterval(() => {
    // Cambiamos el color de fondo de cada div aleatoriamente.
    let div = document.querySelectorAll("div > div");

    for (const elemento of div) { 
        elemento.style.backgroundColor = `rgb(${getRandom(255)}, ${getRandom(
            255
        )}, ${getRandom(255)})`;
    }
    
}, 1000);

const button = document.querySelector("button");

button.addEventListener('click', () => {
    const lastDiv = document.querySelector("body div")
    const newDiv = document.createElement("div");
    lastDiv.appendChild(newDiv);
});





