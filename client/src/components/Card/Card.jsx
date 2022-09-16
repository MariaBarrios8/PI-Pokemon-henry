import React from "react";



export default function Card({img, name, types}) {
    return (
        <div>
            <img src={img} alt='image not found' width='250px' height='250' />
            <h3>{name}</h3>
            <h5>Type: {types.map(e => e.name + "- ")}</h5>
        </div>
    )
}