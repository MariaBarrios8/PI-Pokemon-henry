const { Pokemon, Type } = require('../db')
const axios = require('axios')

/*const pokeTypes = async () => {
    try {
        const pokeTypes = []

        await axios.get('https://pokeapi.co/api/v2/type')
        .then(apiTypes => {
            apiTypes.data.results.map(pokeT => pokeTypes.push(pokeT.name))
        }).catch(error => console.log(error))

        const types = pokeTypes.map(async (pokeT) => {
            return await Type.findOrCreate({
                where: {
                    name: pokeT
                }
            }).catch(e => console.log(e))
        })

        const allPokeTypes = await Type.findAll()
        return allPokeTypes
    } catch (error) {
        console.log(error)
    }
}*/

const getTypes = async () => {
    let pokeTypes = await axios.get('https://pokeapi.co/api/v2/type')

    let dataType = await pokeTypes.data.results
    .map((e) => e.name)
    .join()
    .split(',')
    .filter(e => e.length)


    dataType.forEach(async (e) => {
        await Type.findOrCreate({
            where: { name: e}
        })
    })
    const typeDb = await Type.findAll()
}

module.exports = {
    getTypes
}