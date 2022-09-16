import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { getPokemons } from "../../actions";
import {Link} from 'react-router-dom'
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import './home.css'



export default function Home() {
    const dispatch = useDispatch() //A hook to access the redux dispatch function.
    const allPokes = useSelector((state) => state.pokemons)

    const types = useSelector((state) => state.types)


    //paginado
    const [currentPage, setCurrentPage] = useState(1) //comienzo en 1
    const [pokesPerPage, setPokesPerPage] = useState(12)  //cantidad de cards por página
    const indexOfLastPoke = currentPage * pokesPerPage // 12
    const indexOfFirstPoke = indexOfLastPoke - pokesPerPage //0
    const currentPokes = allPokes.slice(indexOfFirstPoke, indexOfLastPoke)


    const [order, setOrder] = useState("")
    const [score, setScore] = useState("")


    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const lastPage = allPokes.length / pokesPerPage


    const nextPage = () => {
        if(currentPage < lastPage) {
            setCurrentPage(currentPage + 1)
        }
    }
    const prevPage = () => {
        if(currentPage > 1) {
            setCurrentPage(currentPage + 1)
        }
    }
    //paginado

    //carga de cartas
    useEffect(() => {
        dispatch(getPokemons())
    }, [dispatch])

    //reseteo
    function handleClick(e) {
        e.preventDefault();
        dispatch(getPokemons())
    }



    return (
        <div>
            <Link>Create a Pokemon</Link>
            <h1>Henry Poke-Proyect</h1>
            <button onClick={(e) => {
                handleClick(e)
            }}
            >Reload all Pokemons
            </button>

            <div>
                <select className="Orden alfabetico">
                    <option hidden="AllThePokemons">Alphabetical order</option>
                    <option value="asc">A - Z order</option>
                    <option value="des">Z - A order</option>
                </select>
                <Pagination
                pokesPerPage={pokesPerPage}
                allPokes={allPokes.length} //necesito un valor
                pagination={pagination}
                prevPage={prevPage}
                nextPage={nextPage}
                />
                <SearchBar />
                <div className="pokeCard">
                    {currentPokes?.map((el) => {
                        return (
                            <Card 
                            img={el.img}
                            name={el.name}
                            types={el.types}
                            key={el.id}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}