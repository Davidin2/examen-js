// Consigue una lista con los nombres de los personajes de la serie Rick and Morty
// que aparecen en los episodios lanzados en el mes de enero (el año no importa).
// Utiliza llamadas a la API: 'https://rickandmortyapi.com/api/'

'use strict';

async function getCharacters (status, species) {
    try {
        const pages = (await (await fetch(`https://rickandmortyapi.com/api/episode`)).json()).info.pages; //vemos cuantas paginas hay
        let allCharacters = [];
        for (let index = 1; index <= pages; index++) { //entramos en todas las paginas
            const episodes = (await (await fetch(`https://rickandmortyapi.com/api/episode?page=${index}`)).json()).results;
            episodes.map((episode) => { // uso el map para pasar por todos como un for
                if (episode.air_date.includes("January")){ //Si es de Enero
                    let objeto = {
                    characters : episode.characters,
                    };
                    for (let index = 0; index < objeto.characters.length; index++) { //sacamos los personajes
                        if (!allCharacters.includes(objeto.characters[index]))
                        allCharacters.push(objeto.characters[index]); //solo incluimos los no repetidos    
                    }
                }
            });

        };
        //console.log(allCharacters);
        for (let index = 0; index < allCharacters.length ; index++) {
            const names = (await (await fetch(`${allCharacters[index]}`)).json()).name;
            console.log(names); // sacamos por consola la lista de usuarios, podríamos meterla en un arrya o donde sea
        }
    }
    catch(err){
        console.log(err);
        console.log("Error en el fetch");

    }
};

getCharacters();


