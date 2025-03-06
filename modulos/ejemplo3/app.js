const { mostrarTema, sumar } = require('./funcs.js');

console.log("antes");
setTimeout(() => mostrarTema("tema"), 3000);
console.log("despues");

setTimeout(() => sumar(2, 3), 5000);

setInterval(() => mostrarTema("tema"), 2000);
setInterval(() => sumar(2, 3), 3000);