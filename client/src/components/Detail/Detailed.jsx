import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokeDetail } from "../../actions";



export default function Detailed(props) {
    console.log(props)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getPokeDetail(props.match.params.id)) //se podría usar el useParams
    }, [dispatch])

    const myPokemon = useSelector((state) => state.detail)

    return (
        <div>
            {
                myPokemon.length ?
                <div>
                    <h1>Pokemon: {myPokemon[0].name}</h1>
                    <img src={myPokemon[0].img} />
                    <h2>{myPokemon[0].id}</h2>
                    <h2>{myPokemon[0].attack}</h2>
                    <h2>{myPokemon[0].hp}</h2>
                    <h2>{myPokemon[0].defense}</h2>
                    <h2>{myPokemon[0].speed}</h2>
                    <h2>{myPokemon[0].height}</h2>
                    <h2>{myPokemon[0].weight}</h2>
                </div> 
                : asad
            }
        </div>
    )
}