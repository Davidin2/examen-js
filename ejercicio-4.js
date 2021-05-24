// Escribe una función que, al recibir un array como parámetro, elimine los strings repetidos del mismo.
// No se permite hacer uso de Set ni Array.from().
// // Ejemplo
'use strict';

const names = [
    'A-Jay',
    'Manuel',
    'Manuel',
    'Eddie',
    'A-Jay',
    'Su',
    'Reean',
    'Manuel',
    'A-Jay',
    'Zacharie',
    'Zacharie',
    'Tyra',
    'Rishi',
    'Arun',
    'Kenton',
];

function quitaDuplicados (entrada){

return entrada.filter((item,index)=>{
    return entrada.indexOf(item) === index;     //si el elemento actual coincide con el indica del primero encrontrado true, sino es que es repetido y false

  })

}
  console.log(quitaDuplicados(names));
