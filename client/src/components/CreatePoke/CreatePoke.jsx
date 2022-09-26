import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { postPoke, getTypes } from "../../actions";
import { useDispatch, useSelector } from "react-redux";




export default function CreatePoke() {
    const dispatch = useDispatch()
    const types = useSelector((state) => state.types)
    const history = useHistory()

    
    const [input, setInput] = useState({
        name: "",
        hp:"",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        img: "",
        types: []
    })
    const [errors, setErrors] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        if (Object.values(errors).length) {
            let alert = ''
            console.log(alert)
            let err = Object.values(errors)
            return alert(alert = err.map(e => e + '\n'))
        } else {
            const {name, hp, attack, defense, speed, img, height, weight, types} = input
            if (name && hp && attack && defense && speed && img && height && weight && types.length !== 0) {
                dispatch(postPoke(input))

                alert("You created a Pokemon (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧")
            } else alert("Some field is missing information");
            setInput({
                name: "",
                hp: "",
                attack: "",
                defense: "",
                speed: "",
                height: "",
                weight: "",
                img: "",
                types: []
            })
            history.push("/pokemons")
        }
    }

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch]);

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })

        setErrors(
            validate({
                ...input,
                [e.target.name]: [e.target.value],
            })
        );
    }

    function handleClearTypes(event) {
        setInput({
            ...input,
            type: []
        })
    }

    function handleSelect(event) {
        setInput({
            ...input,
            types: [...input.types, event.target.value],
        })
    }

    function tisNumber(n) {
        if(/^\d+$/.test(n)) {
            return true
        }
        return false
    }

    function tisString(n) {
        if(/^\D+$/.test(n)) {
            return true;
        }
        return false;
    }

    function validate(input) {
        let errors = {}
        if (!input.name) {
            errors.name = "Please input a name";
      
          } else if (!tisString(input.name)) errors.name = "characters only";
      
          else if (!input.hp) errors.hp = "missing value";
      
          else if (!tisNumber(input.hp)) errors.hp = "numbers only";
      
          else if (!input.attack) errors.attack = "missing value";
      
          else if (!tisNumber(input.attack)) errors.attack = "numbers only";
      
          else if (!input.defense) errors.defense = "missing value";
      
          else if (!tisNumber(input.defense)) errors.defense = "numbers only";
      
          else if (!input.speed) errors.speed = "missing value";
      
          else if (!tisNumber(input.speed)) errors.speed = "numbers only";
      
          else if (!input.weight) errors.weight = "missing value";
      
          else if (!tisNumber(input.weight)) errors.weight = "numbers only";
      
          else if (!input.height) errors.height = "missing value";
      
          else if (!tisNumber(input.height)) errors.height = "numbers only";
          // if (input.types.length === 0) errors.types = "You must choose a Type for your pokemon!!"
          return errors;
        }  
    return (
        <div>
            <form 
            onSubmit={(e) => handleSubmit(e)}
            className='form-layout' >
                <div >
                    <input 
                    className="just-input"
                    required
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={input.name}
                    onChange={(e) => handleChange(e)}
                    />
                    {errors.name && <p className="errors">{errors.name}</p>}
                </div>

                <div>
                    <input 
                    className="just-input"
                    type="number"
                    placeholder="Health-Points"
                    name="hp"
                    value={input.hp}
                    onChange={(e) => handleChange(e)}
                    />
                    {errors.hp && <p className="errors">{errors.hp}</p>}
                </div>

                <div>
                <input 
                    className="just-input"
                    type="number"
                    placeholder="Attack"
                    name="attack"
                    value={input.attack}
                    onChange={(e) => handleChange(e)}
                    />
                    {errors.attack && <p className="errors">{errors.attack}</p>}
                </div>

                <div>
                <input 
                    className="just-input"
                    type="number"
                    placeholder="Defense"
                    name="defense"
                    value={input.defense}
                    onChange={(e) => handleChange(e)}
                    />
                    {errors.defense && <p className="errors">{errors.defense}</p>}
                </div>

                <div>
                <input 
                    className="just-input"
                    type="number"
                    placeholder="Speed"
                    name="speed"
                    value={input.speed}
                    onChange={(e) => handleChange(e)}
                    />
                    {errors.speed && <p className="errors">{errors.speed}</p>}
                </div>

                <div>
                <input 
                    className="just-input"
                    type="number"
                    placeholder="Height"
                    name="height"
                    value={input.height}
                    onChange={(e) => handleChange(e)}
                    />
                    {errors.height && <p className="errors">{errors.height}</p>}
                </div>

                <div>
                <input 
                    className="just-input"
                    type="number"
                    placeholder="Weight"
                    name="weight"
                    value={input.weight}
                    onChange={(e) => handleChange(e)}
                    />
                    {errors.weight && <p className="errors">{errors.weight}</p>}
                </div>

                <div>
                <input 
                    className="just-input"
                    type="text"
                    placeholder={("pick an image")}
                    name="img"
                    value={input.img}
                    onChange={(e) => handleChange(e)}
                    />
                </div>
                <select
                className="just-input"
                onChange={(e) => {
                    handleSelect(e)
                }}
                >
                    {types.map((e) => {
                        return (
                            <option value={e.name} key={e.id} >
                                {e.name}
                            </option>
                        )
                    })}
                </select>

                <div>
                    
                    <button className="subitForm" type="submit">CREATE!</button>
                </div>
            </form>
            <Link to='/home'>
                <button>Back to home</button>
            </Link>
        </div>
    )
    
}