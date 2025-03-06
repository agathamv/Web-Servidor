const http = require('http');
const port = 3000 ;
const cursos = require ('./cursos.json');
const fs = require('node:fs');

const processRequest = (req, res) => {
    console.log("Petición recibida: ", req.url);

    if (req.method === "GET") {
        manejarSolicitudesGET(req, res);
        
    }else if(req.method === "POST"){
        manejarSolicitudesPOST(req, res);
    }
}

const manejarSolicitudesGET = (req, res) => {
    let body = null;
    switch (req.url) {
        case '/':
            body = cursos;
            break;
        case '/matematicas':
            body = cursos.matematicas;
            break;
        case '/programacion':
            body = cursos.programacion;
            break;
    }
    if (body) {
        res.setHeader('Content-type', 'application/json');
        res.end(JSON.stringify(body));
    } else {
        res.statusCode = 404; 
        res.end('No encontrado');
    }
}

const manejarSolicitudesPOST = (req, res) => {
    let body = "";
    req.on("data", (content) => body += content.toString());

    req.on("end", () => {
        if (req.url === '/programacion') {

            body = JSON.parse(body);
            console.log("Body: ", body);
            cursos.programacion.push(body);

            fs.writeFileSync('./cursos.json', JSON.stringify(cursos, null, 4));
            console.log(cursos);
            res.statusCode= 201;

            res.end(JSON.stringify(body));
        }else{
            res.statusCode = 404;
            res.end("No se encontró el curso");
        }
    });

}



//crear un servidor
const servidor = http.createServer((req, res) => {
    processRequest(req, res);
});


servidor.listen (port , () => {
    console.log("Servidor escuchando en localhost puerto" , port );
});

servidor.on("error", (error) => {
    console.error("Server error...:", error);
    servidor.listen(0, () => {
        console.log("Server escuchando en puerto:", servidor.address().port);
    })
});