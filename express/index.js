const express = require ('express' );
const {routerProgramacion} = require ('./routers/programacion.js' );
const {routerMatematicas} = require ('./routers/matematicas.js' );
app = express();
const cursos = require ('./cursos.json' );
require ('dotenv').config ();

app.use('/cursos/programacion', routerProgramacion);
app.use('/cursos/matematicas', routerMatematicas);


// Routing
app.get('/', (req, res) => {
    res.send('Hello World' )
})


// Listening
const port = process .env.PORT || 3000;
app.listen (port, () => {
    console .log('Servidor iniciado en el puerto' , port);
});

