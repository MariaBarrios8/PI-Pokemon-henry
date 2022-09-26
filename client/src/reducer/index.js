const initialState = {
  pokemons: [],
  allPokemons: [],
  types: [],
  detail: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_POKEMONS":
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      };
    case "GET_POKE_DETAIL":
        return {
            ...state,
            detail: action.payload
        }
    case "ORDER_BY_NAME":
      const pokeOrder =
        action.payload === "asc"
          ? state.pokemons.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.pokemons.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        pokemons: pokeOrder,
      };
    case "ORDER_BY_ATTACK":
      let attackOrder = [...state.pokemons];
      if (action.payload === "low") {
        attackOrder.sort((a, b) => {
          return parseInt(a.attack) - parseInt(b.attack);
        });
      }
      if (action.payload === "high") {
        attackOrder.sort((a, b) => {
          return parseInt(b.attack) - parseInt(a.attack);
        });
      }
      return {
        ...state,
        pokemons: attackOrder,
      };
    case "GET_TYPES":
      return {
        ...state,
        types: action.payload,
      };
    case 'FILTER_BY_TYPE':
        const pokesAll = state.allPokemons;
        const typePoke =pokesAll.filter((poke) => {
            if(poke.types) {
                const type = poke.types.map((p) => p.name)
                return type.includes(action.payload)
            }
            if(poke.type) {
                return poke.types.includes(action.payload)
            }
            return null
        })
        return {
            ...state,
            pokemons: action.payload === "Types" ? pokesAll : typePoke
        }
    case "FILTER_CREATED":  
      const allPokes = state.pokemons;
      const createdFilter =
        action.payload === "all"
          ? allPokes
          : allPokes.filter((e) => {
              if (action.payload === "user") {
                if (e.createdAtDb) {
                  return e;
                }
              } else if (action.payload === "api") {
                if (!e.createdAtDb) {
                  return e;   ///BUG BUG BUG
                }
              }
            })
        return {
            ...state,
            pokemons: createdFilter
        }
      case 'POST_POKE': {
        return {
          ...state
        }
      }
    default:
      return state;
  }
}

export default rootReducer;
