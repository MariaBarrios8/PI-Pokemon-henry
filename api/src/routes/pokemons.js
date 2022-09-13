const { Router } = require("express");
const { Pokemon, Type } = require("../db");

const { getAllPokes } = require("../controllers/pokemon");
const { getTypes } = require("../controllers/type");

const router = Router();

router.get("/pokemons", async (req, res) => {
  //unificamos rutas
  const { name } = req.query;
  const totalPokes = await getAllPokes();

  if (name) {  ///pokemons?name="..."
    let pokeName = await totalPokes.filter((e) =>
      e.name.toLowerCase().includes(name.toLocaleLowerCase())
    );

    pokeName.length
      ? res.status(200).send(pokeName)
      : res.status(404).send("Sorry! Pokemon not found （（●´∧｀●））");
  } else {
    res.status(200).send(totalPokes);
  }
});


router.get("/pokemons/:id", async (req, res) => {
    const allPokes = await getAllPokes()

    const {id} = req.params

    if(id) {
        let pokeId = await allPokes.filter((obj) => obj.id == id)
        pokeId.length
        ? res.status(200).send(pokeId)
        : res.status(404).send("Sorry! Pokemon not found （（●´∧｀●））")
    }
})


router.post("/pokemons", async (req, res) =>{

    let{
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        img,
        type,
    } = req.body

    let pokeCreation = await Pokemon.create({
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        img
    })

    let pokeDb = await Type.findAll({

        where: {
            name: name
        },
    })

    pokeCreation.addType(pokeDb)
    res.status(200).send("You created a Pokemon (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧")

})





module.exports = router;
