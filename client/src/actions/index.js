import axios from 'axios'


export function getPokemons() {
    return async function(dispatch) {
        let json = await axios.get('http://localhost:3001/pokemons')
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
            let json = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
            return dispatch ({
                type: 'GET_POKE_NAMES',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}


export function getPokeDetail(id) {
    return async function (dispatch) {
        try {
        let json = await axios.get(`http://localhost:3001/pokemons/${id}`);

        return dispatch({
            type: "GET_POKE_DETAIL",
            payload: json
        })
        } catch(error) {
        console.log(error)
        }
    }
}


export function orderPokesByName(payload) {
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}


export function orderByAttack(payload) {
    return {
        type: 'ORDER_BY_ATTACK',
        payload
    }
}


export function getTypes(payload) {
    return async function (dispatch) {
        let json = await axios.get("http://localhost:3001/types")

        return dispatch({
            type: 'GET_TYPES',
            payload: json.data
        })
    }
}

export function filterByType(payload) {
    return {
        type: "FILTER_BY_TYPE",
        payload
    }
}


export function filterCreated(payload) {
    return {
        type: 'FILTER_CREATED',
        payload
    }
}


export function postPoke(payload) {
    return async function (dispatch) {
        const posting = await axios.post('http://localhost:3001/pokemons', payload)
        return dispatch ({
            type: 'POST_POKE',
            posting
        })
    }
}