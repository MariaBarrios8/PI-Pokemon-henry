const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokeRoute = require("./pokemons")
const typeRoute = require("./types")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons', pokeRoute)
router.get('/pokemons/:id', pokeRoute)
router.post('/pokemons', pokeRoute)
router.get("/types", typeRoute)


module.exports = router;
