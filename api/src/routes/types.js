const { Router } = require("express");
const { Pokemon, Type } = require("../db");

const { getTypes } = require("../controllers/type");

const router = Router()

router.get("/types", async (req, res) => {
    const pokeType = await getTypes()

    const allTypes = await Type.findAll()
    const filteredTypes = await allTypes.map(e => e.name)
    res.status(200).send(filteredTypes)
})




module.exports = router