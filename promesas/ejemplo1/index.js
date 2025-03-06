//en la promesa manejas en que caso llama a la función de cumplida y en que caso a la de rechazada
const miPromesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random();
            if (random < 0.8) {
                resolve(random);
            } else {
                reject(random);
            }
        }, 3000);
});


const manejarPromesaCumplida = (valor) => { 
    console.log("Promesa cumplida:", valor);
};

const manejarPromesaRechazada = (razonRechazo) => {
    console.log("Promesa rechazada:", razonRechazo);
}

console.log(miPromesa);

//then recibe dos funciones, la primera se ejecuta si la promesa se cumple, la segunda si la promesa se rechaza
//miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);

//se ejecuta la función de cumplida, si hay error ejecuta la de rechazada y cuando termina ejecuta finally
miPromesa.then(manejarPromesaCumplida).catch(manejarPromesaRechazada).finally(() => {console.log(miPromesa);}); 





