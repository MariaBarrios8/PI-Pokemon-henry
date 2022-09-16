import axios from 'axios'


export function getPokemons() {
    return async function(dispatch) {
        var json = await axios.get('http://localhost:3001/pokemons')
        //is this back and front connection?

        return dispatch({
            type: 'GET_POKEMONS',
            payload: json.data
        })
    }
}


export function getPokeNames(name) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
            return dispatch ({
                type: 'GET_POKE_NAMES',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}