const express = require ('express' );
app = express ();
const cursos = require ('../cursos.json' );
const routerProgramacion = express.Router();

routerProgramacion.use(express.json());

routerProgramacion.get('/', (req, res) => {
    console.log(cursos);
    if(req.query.ordenar === 'vistas') {
        res.send(JSON.stringify(cursos.programacion.sort((a, b) => b.vistas - a.vistas)));
    } else {
        res.send(JSON.stringify(cursos.programacion));
    }
});

routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const data = cursos.programacion.filter(cursos => cursos.lenguaje === lenguaje);
    
    if (data.length === 0) {
        return res.status(404).send("No se encontró " + lenguaje);
    }
    res.send(JSON.stringify(data));
});

/*routerProgramacion.get('/:nivel', (req, res) => {
    const nivel = req.params.nivel;
    const data = cursos.programacion.filter(cursos => cursos.nivel === nivel);
    
    if (data.length === 0) {
        return res.status(404).send("No se encontró " + nivel);
    }
    res.send(JSON.stringify(data));
});*/

routerProgramacion.post('/', (req, res) => {
    const nuevoCurso = req.body;
    cursos.programacion.push(nuevoCurso);
    res.json(nuevoCurso);
});

routerProgramacion .put('/:id', (req, res) => {
    const cursoActualizado = req.body;
    const id = req.params.id;
    const indice = programacion.findIndex(curso => curso.id == id);
    // Si no lo encuentra, devuelve -1
    if (indice >= 0) {
        programacion[indice] = cursoActualizado ;
    }
    res.send(JSON.stringify(programacion));
});

routerProgramacion .delete('/:id', (req, res) => {
    const id = req.params.id;
    const indice = programacion.findIndex(curso => curso.id == id);
    if (indice >= 0) {
    //Elementos a eliminar desde el índice
    programacion.splice(indice, 1);
    }
    res.send(JSON.stringify(programacion));
}); 

module.exports = {routerProgramacion};