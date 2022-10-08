

export function exportable(allPokemons, payload) {
    console.log(allPokemons, payload, 'AAAAAAAAAAAAAAAA')
    return payload === 'all' ?
    allPokemons :
    allPokemons.filter(e => e.types.map(e => e.name).includes(payload))
}