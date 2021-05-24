// Crea un programa que reciba un número en decimal o binario y devuelva la conversión:
// Si le pasamos un nº en decimal debe retornar la conversión a binario.
// Si le pasamos un nº en binario deberá devolver su equivalente decimal.
// Para ello la función deberá recibir un segundo parámetro que indique la base: 
//  10 (decimal) o 2 (binario).
// No se permite utilizar el método parseInt().

'use strict';
function convert(num,base) {
    if (base ===10){   //convertimos a binario ya que el numero es decimal
       let temp=num;
        binario=[];
        while(num>0){
            binario.push(resto=num%2); //el resto es el numero en binario
            num=Math.floor(num/2);
       }
       binario=binario.reverse().join(""); //dandole la vuelta al array
       return(`El numero ${temp} en binario es ${binario}`);
    }

    else if (base ===2) {//convertimos a decimal ya que el numero dado es binario
        numCadena=num.toString().split("").reverse().join(""); //lo damos la vuelta
        let decimal =0;
            for (let i = 0; i < numCadena.length; i++) {
                decimal=decimal+numCadena[i]*Math.pow(2,i) //multiplicamos cada digito pot su valor
            } 
            return(`El numero ${num} en decimal es ${decimal}`);
    } 
    
}

num=prompt("Dame un numero en binario o decimal")
base=prompt("En que base está (2 o 10)")

//Falta comprobar si en la base solo introduce 2 o 10 y si el numero solo tiene 0 y 1 en caso de ser binario

alert(convert (Number(num),Number(base)))

