const express = require ('express' );
const app = express ();
const routerMatematicas = express.Router();
app.use('/cursos/matematicas', routerMatematicas);

routerMatematicas.get('/', (req, res) => {
    res.send(cursos.matematicas); 
    res.send(JSON.stringify(cursos.matematicas)); 
});

routerMatematicas.get('/:tema', (req, res) => {
    const tema = req.params.tema;
    const data = cursos.matematicas.filter(cursos => cursos.tema === tema);
    
    if (data.length === 0) {
        return res.status(404).send("No se encontró" + tema);
    }
    res.send(JSON.stringify(data));
});

module.exports = { routerMatematicas };
