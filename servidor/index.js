const http = require('http');
const url = new URL("https://u-tad.com/grados/")

const processRequest = (req, res) => {
    console.log("Petición recibida: ", req.url);
    res.setHeader("Content-Type", "text/html ; charset=utf-8");
    res.end("<html><h1>Hola</h1></html>");//permite enviar una respuesta al cliente cuando termina el proceso
}

//crear un servidor
const servidor = http.createServer((req, res) => {
    //logica del proceso leyendo req
    processRequest(req, res);
});

const port = 3000 ;

servidor.listen (port , () => { //Puerto y qué queremos hacer al inicializarse
    console.log("Servidor escuchando en localhost puerto" , port );
    //console.log("url.hostname: ", url.hostname, "\nurl.pathname: ", url.pathname);
});

servidor.on("error", (error) => {
    console.error("Server error...:", error);
    servidor.listen(0, () => {
        console.log("Server escuchando en puerto:", servidor.address().port);
    })
});