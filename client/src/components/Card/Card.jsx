import React from "react";
import { Link } from 'react-router-dom'



export default function Card({img, name, types, id, attack}) {
    return (
        <div className="Card">
            <img className="pokeImg" src={img} alt='image not found' width='250px' height='250' />
            <div className="CardBody">
            <h1 className="pokemon">{name}</h1>
            <h3 className="types">Type: {types.map(e => e.name + " ")}</h3>
            <h3>Attack points: {attack}</h3>
            <br></br>
            <Link to={`/${id}`}>
            <button>Read more</button>
            </Link>
            </div>
        </div>
    )
}