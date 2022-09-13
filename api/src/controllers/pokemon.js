const { Pokemon, Type } = require('../db')
const axios = require('axios')



const getPokeApi = async () => {
    const pokemons = await axios('https://pokeapi.co/api/v2/pokemon?offset=0&limit=15')
    const mapUrl = await pokemons.data.results.map(e => { return e.url })

    var pokeArray = []

    for (var i = 0; i < mapUrl.length; i++) {
        const url = await axios(mapUrl[i])
        pokeArray.push({
            id: url.data.id,
            name: url.data.name,
            height: url.data.height,
            weight: url.data.weight,
            hp: url.data.stats.find(e => e.stat.name === 'hp').base_stat,
            attack: url.data.stats.find(e => e.stat.name === 'attack').base_stat,
            defense: url.data.stats.find(e => e.stat.name === 'defense').base_stat,
            speed: url.data.stats.find(e => e.stat.name === 'speed').base_stat,
            types: url.data.types.map(e => e = { name: e.type.name}),
            img: url.data.sprites.other["official-artwork"].front_default
        }) 
    }
    return pokeArray
}


const getDB = async () => {
    return await Pokemon.findAll({
        inlcude: Type,
    })
}
//dudas


const getAllPokes = async () => {
    const api = await getPokeApi()
    const db = await getDB()
    const allPokes = await db.concat(api)
    return allPokes
}


module.exports = {
    getPokeApi,
    getDB,
    getAllPokes
}
