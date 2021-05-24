// Ejercicio 6
// Subraya (manipulando el DOM) todas las palabras de los 
// párrafos en "ejercicio.html" que contengan más de 5 letras.

'use strict';


const esLetra = (caracter) => {   //True si es una letra. No contempla la ñ ya que en el texto no hay
	let ascii = caracter.toUpperCase().charCodeAt(0);
	return ascii > 64 && ascii < 91;
};

var p = document.querySelectorAll("p");

for (const elemento of p) {   //para pasar por todos los P
    const texto=elemento.innerHTML //texto es un string con todo el p
    let long=0;
    let buffer="";
    let textoFinal="";
    for (let i = 0; i < texto.length; i++) { //pasamos por todos los caracteres del P
        if (esLetra(texto[i])) {   //Si es una letra, contamos y almacenamos en buffer
            long=long+1;
            buffer=buffer+texto[i];
        } else {   //si no es letra
            if (long>0){ //terminamos la palabra anterior
                if (long>5) textoFinal=textoFinal+"<span style='text-decoration: underline'>"+buffer+"</span>"+texto[i]
                else textoFinal=textoFinal+buffer+texto[i];
                long=0;   //reseteamos y empezamos otra palabra
                buffer="";
            } else textoFinal=textoFinal+texto[i]   //si no habia palabra copiamos el caracter tal cual
        }
        
    }
    elemento.innerHTML=textoFinal;
}