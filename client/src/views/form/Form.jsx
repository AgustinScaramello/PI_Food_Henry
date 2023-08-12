import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { postRecipe, getDiets } from "../../redux/actions";
import styled from "./Form.module.css"

function Form() {

    const dispatch = useDispatch()

    const [ newRecipe, setNewRecipe ] = useState({
        title: "",
        summary: "",
        healthScore: "",
        instructions: "",
        image: "",
        diets: []
    })

    const dietsList = useSelector((state) => state.diets)

    const handleChange = (e) => {
        setNewRecipe({
            ...newRecipe,
            [e.target.name]: e.target.value
        })
    }
    
    const handleChangeDiet = (e) => {
        setNewRecipe({
            ...newRecipe,
            [newRecipe.diets]: [...newRecipe.diets, e.target.value]
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(postRecipe(newRecipe))
    }
    

    useEffect(()=>{
        dispatch(getDiets()) 
    }, [dispatch])

    return ( 
        <div>
            <h1 className={styled.titleCreate}>Crear Receta</h1>
            <form className={styled.formCreate} onSubmit={handleSubmit}>
                <div className={styled.containerInputCreate}>
                    <label htmlFor="" className={styled.labelCreate}>Nombre</label>
                    <input type="text" className={styled.inputCreate} name="title" value={newRecipe.title} onChange={handleChange} />
                </div>

                <div className={styled.containerInputCreate}>
                    <label htmlFor="" className={styled.labelCreate}>Resumen de plato</label>
                    <input type="text" className={styled.inputCreate} name="summary" value={newRecipe.summary} onChange={handleChange} />
                </div>

                <div className={styled.containerInputCreate}>
                    <label htmlFor="" className={styled.labelCreate}>Nivel de comida saludable:</label>
                    <input type="number" max={100} min={0} className={styled.inputCreate} name="healthScore" value={newRecipe.healthScore} onChange={handleChange} />
                </div>

                <div className={styled.containerInputCreate}>
                    <label htmlFor="" className={styled.labelCreate}>Paso a paso</label>
                    <input type="text" className={styled.inputCreate} name="instructions" value={newRecipe.instructions} onChange={handleChange} />
                </div>

                <div className={styled.containerInputCreate}>
                    <label htmlFor="" className={styled.labelCreate}>Imagen</label>
                    <input type="url" className={styled.inputCreate} name="image" value={newRecipe.image} onChange={handleChange} />
                </div>

                <div>
                    {dietsList?.map((diet) => (
                        <div className={styled.containerInputCreate} key={diet.id}>
                            <label htmlFor="" className={styled.labelCreate} >{diet.name}</label>
                            <input type="checkbox" value={diet.name} onChange={handleChangeDiet}/>
                        </div>
                    ))}
                </div>

                <button className={styled.buttonCreate} type="submit">Crear</button>
            </form>
        </div>
     )
}

export default Form;