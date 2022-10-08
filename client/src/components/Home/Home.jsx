import React, { useState, useEffect, Fragment } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { getPokemons, orderPokesByName, orderByAttack, getTypes, filterByType, filterCreated } from "../../actions";
import {Link} from 'react-router-dom'
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import CreatePoke from "../CreatePoke/CreatePoke";
import './home.css'



export default function Home() {
    const dispatch = useDispatch() //A hook to access the redux dispatch function.
    const allPokes = useSelector((state) => state.pokemons)

    //const pokiTypes = useSelector((state) => state.allTypes)


    //paginado
    const [currentPage, setCurrentPage] = useState(1) //comienzo en 1
    const [pokesPerPage, setPokesPerPage] = useState(12)  //cantidad de cards por página
    const indexOfLastPoke = currentPage * pokesPerPage // 12
    const indexOfFirstPoke = indexOfLastPoke - pokesPerPage //0
    const currentPokes = allPokes.slice(indexOfFirstPoke, indexOfLastPoke)


    const [order, setOrder] = useState("")
    const [attack, setAttack] = useState("")


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

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])

    //reseteo
    function handleClick(e) {
        e.preventDefault();
        dispatch(getPokemons())
    }

    //orden alfabético
    function handleSort (e) {
        e.preventDefault()
        dispatch(orderPokesByName(e.target.value))
        setCurrentPage(1)
        setOrder(`${e.target.value}`)
    }

    //orden por puntos de ataque
    function handleAttack(e) {
        e.preventDefault()
        dispatch(orderByAttack(e.target.value))
        setCurrentPage(1)
        setAttack(`${e.target.value}`)

    }

    //filtro por tipos
    function handleFilterByTypes(e) {
        e.preventDefault()
        dispatch(filterByType(e.target.value))
    }

    //filtro por creado o no
    function handleFilterCreated(e) {
        dispatch(filterCreated(e.target.value))
        setCurrentPage(1)
    }



    return (
        <div>
            <Link to='/home/create'>
                <button  className="pokePokeCreate" >Create a Pokemon</button>
            </Link>
            <h1>Henry Poke-Proyect</h1>
            <button onClick={(e) => {
                handleClick(e)
            }}
            >Reload all Pokemons
            </button>

            <div>
                <select className="Orden alfabetico" onChange={e => handleSort(e)}>
                    <option hidden="AllThePokemons">Alphabetical order</option>
                    <option value="asc">A - Z order</option>
                    <option value="des">Z - A order</option>
                </select>
                <select className="AttackScore" onChange={e => handleAttack(e)}>
                    <option hidden="attack">Order by AP</option>
                    <option value="high">Higher AP first</option>
                    <option value="low">Lower AP first</option>
                </select>
               {/*<select className="Types" onChange={(e) => handleFilterByTypes(e)}>
                    <option hidden="all">Filter by types</option>
                    {pokiTypes.map((e) => {
                        <option key={e.id} value={e.name}>{e.name}</option>
                    })}
                </select>*/}
                <select className="Types" onChange={(e) => handleFilterByTypes(e)}>
                    <option disable>Filter by types</option>
                    <option value="all">all</option>
                    <option value="normal">normal</option>
                    <option value="fighting">fighting</option>
                    <option value="flying">flying</option>
                    <option value="poison">poison</option>
                    <option value="ground">ground</option>
                    <option value="rock">rock</option>
                    <option value="bug">bug</option>
                    <option value="ghost">ghost</option>
                    <option value="steel">steel</option>
                    <option value="fire">fire</option>
                    <option value="water">water</option>
                    <option value="grass">grass</option>
                    <option value="electric">electric</option>
                    <option value="psychic">psychic</option>
                    <option value="ice">ice</option>
                    <option value="dragon">dragon</option>
                    <option value="dark">dark</option>
                    <option value="fairy">fairy</option>
                    <option value="unknown">unknown</option>
                    <option value="shadow">shadow</option>
                </select>
                <select className="pokemonsFilter" onChange={e => handleFilterCreated(e)}>
                <option hidden="allpokes">Filter by creation</option>
                    <option value="api">Real pokemons</option>
                    <option value="user">Fanmade pokemons</option>
                </select>
                <div className="paginado">
                <Pagination
                pokesPerPage={pokesPerPage}
                allPokes={allPokes.length} //necesito un valor numerico
                pagination={pagination}
                prevPage={prevPage}
                nextPage={nextPage}
                />
                </div>
                <SearchBar />
                <div className="pokeCard">
                    {currentPokes?.map((el) => {
                        return (
                            <Fragment>
                            <div className="dataCard">
                            <Card 
                            img={el.img}
                            name={el.name}
                            types={el.types}
                            attack={el.attack}
                            key={el.id}
                            />
                            </div>
                            </Fragment>
                        )
                    })}
                </div>
            </div>
            <Link to='/home/create'>
                <button  className="pokePokeCreate" >Create a Pokemon</button>
            </Link>
        </div>
    )
}