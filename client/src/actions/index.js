import axios from "axios";

export function getPokemons() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/pokemons");
    //is this back and front connection?

    return dispatch({
      type: "GET_POKEMONS",
      payload: json.data,
    });
  };
}

export function getPokeNames(name) {
  return async function (dispatch) {
    try {
      let json = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
      return dispatch({
        type: "GET_POKE_NAMES",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getPokeDetail(id) {
  return async function (dispatch) {
    try {
      let OnePoke = await axios.get(`http://localhost:3001/pokemons/${id}`);
      console.log(OnePoke, "Marta tiene un marcapasos");

      return dispatch({
        type: "GET_POKE_DETAIL",
        payload: OnePoke.data
      });
    } catch (error) {
      console.log(error, 'ta rotudo');
    }
  };
}

export function orderPokesByName(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

export function orderByAttack(payload) {
  return {
    type: "ORDER_BY_ATTACK",
    payload,
  };
}

export function getTypes() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/types");
    console.log(json, "trae types?");

    return dispatch({
      type: "GET_TYPES",
      payload: json.data,
    });
  };
}

export function filterByType(payload) {
  console.log(payload, "EL PAYLOAD ACTION");
  return {
    type: "FILTER_BY_TYPE",
    payload,
  };
}

export function filterCreated(payload) {
  return {
    type: "FILTER_CREATED",
    payload,
  };
}

export function postPoke(payload) {
  return async function (dispatch) {
    const posting = await axios.post("http://localhost:3001/pokemons", payload);
    return dispatch({
      type: "POST_POKE",
      posting,
    });
  };
}
