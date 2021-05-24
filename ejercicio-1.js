// Escribe una función que devuelva un array de usuarios. De cada usuario 
// guardaremos el username, el nombre y apellido, el sexo, el país, el email 
// y un enlace a su foto de perfil.
// El número de usuarios a obtener se debe indicar con un parámetro de dicha función.
// Sírvete de la API: https://randomuser.me/

'use strict';

async function getUsers(limit) {
    const users = [];
        try {
            const response = await fetch(
                `https://randomuser.me/api/?results=${limit}`
            );
            const { results } = await response.json();
            for (const user of results) {
                const temp ={
                    username:user.login.username,
                    nombre:user.name.first,
                    apellido:user.name.last,
                    sexo:user.gender,
                    país:user.location.country,
                    email :user.email,
                    foto:user.picture.large
                };
                users.push(temp);
            }
            
        } catch (error) {
            console.log(error);
        }
    return(users)
};


// console.log(getUsers(5));

getUsers(5)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));




