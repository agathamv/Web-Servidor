const fs = require("node:fs");

// DE MANERA SINCRONA

const texto = fs.readFileSync("index.html", "utf-8");
console.log(texto);


try {
    fs.renameSync("index.html", "index2.html");
    console.log("Archivo renombrado");
} catch (err) {
    console.log("ERROR: no se puede cambiar el nombre del archivo");
}


/*
DE MANERA ASINCRONA

fs.readFile("index.html", "utf-8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

fs.rename("index2.html", "index.html", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Archivo renombrado");
});
*/