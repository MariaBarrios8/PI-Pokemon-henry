import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokeDetail } from "../../actions";

export default function Detail(props) {
  const dispatch = useDispatch();

  const { id } = useParams();


  useEffect(() => {
    dispatch(getPokeDetail(id));
  }, [id]);


  const currentPoke = useSelector(state => state.detail)

  return (
    <div className="cardContainer">
        <h1 className="PokeName">{currentPoke.name}</h1>
        <div>
            <img className="detail-Image" src={currentPoke.img} alt={`${currentPoke.name}`} />
        </div>
        <div className="detailsContainer">
            <h3>Attack Points: {currentPoke.attack}</h3>
            <h3>Health Points: {currentPoke.hp}</h3>
            <h3>Defense Points: {currentPoke.defense}</h3>
            <h3>Height: {currentPoke.height}</h3>
            <h3>Weight: {currentPoke.weight}</h3>
            <p>Type(s):</p>
            <div>

            </div>
        </div>
    </div>
  )
}
