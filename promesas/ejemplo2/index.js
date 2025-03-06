let productos = [{
    nombre: "Pc-Gaming",
    marca: "Asus",
    precio: 1200
},{
    nombre: "Tablet",
    marca: "Samsung",
    precio: 300
},{
    nombre: "Camara-Reflex",
    marca: "Canon",
    precio: 500
}];

getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
}

const manejarPromesaCumplida = (productos) => { 
    console.log("Promesa cumplida:", productos);
};

//getProductos().then(manejarPromesaCumplida);

await getProductos().then(manejarPromesaCumplida);