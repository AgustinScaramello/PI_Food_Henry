import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { postRecipe, getDiets } from "../../redux/actions";
import validation from "./validations";
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

    const [errors, setErrors] = useState({
        title: "",
        summary: "",
        healthScore: "",
        instructions: "",
        image: "",
    })

    const dietsList = useSelector((state) => state.diets)

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setNewRecipe({ ...newRecipe, [name]: value })
        setErrors(validation({...newRecipe, [name]: value}))
    }
    
    const handleChangeDiet = (e) => {
        const selectedDiet = e.target.value;

        const updatedDiets = newRecipe.diets.includes(selectedDiet)
            ? newRecipe.diets.filter((diet) => diet !== selectedDiet)
            : [...newRecipe.diets, selectedDiet];

        setNewRecipe({
            ...newRecipe,
            diets: updatedDiets,
        });
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(postRecipe(newRecipe))
    }
    

    useEffect(()=>{
        dispatch(getDiets()) 
    }, [dispatch])

    return ( 
        <div className={styled.divGeneralCreate}>
            <h1 className={styled.titleCreate}>Crear nueva receta</h1>
            <form className={styled.formCreate} onSubmit={handleSubmit}>
                <div className={styled.containerInputCreate}>
                    <label htmlFor="" className={styled.labelCreate}>Nombre</label>
                    <input type="text" className={styled.inputCreate} name="title" value={newRecipe.title} onChange={handleChange} />
                    <p className={styled.errorsCreate}>{errors.title}</p>
                </div>

                <div className={styled.containerInputCreate}>
                    <label htmlFor="" className={styled.labelCreate}>Resumen de plato</label>
                    <input type="text" className={styled.inputCreate} name="summary" value={newRecipe.summary} onChange={handleChange} />
                    <p className={styled.errorsCreate}>{errors.summary}</p>
                </div>

                <div className={styled.containerInputCreate}>
                    <label htmlFor="" className={styled.labelCreate}>Nivel de comida saludable</label>
                    <input type="number" max={100} min={0} className={styled.inputCreate} name="healthScore" value={newRecipe.healthScore} onChange={handleChange} />
                    <p className={styled.errorsCreate}>{errors.healthScore}</p>
                </div>

                <div className={styled.containerInputCreate}>
                    <label htmlFor="" className={styled.labelCreate}>Paso a paso</label>
                    <input type="text" className={styled.inputCreate} name="instructions" value={newRecipe.instructions} onChange={handleChange} />
                    <p className={styled.errorsCreate}>{errors.instructions}</p>
                </div>

                <div className={styled.containerInputCreate}>
                    <label htmlFor="" className={styled.labelCreate}>Imagen</label>
                    <input type="url" className={styled.inputCreate} name="image" value={newRecipe.image} onChange={handleChange} />
                    <p className={styled.errorsCreate}>{errors.image}</p>
                </div>

                <label htmlFor="" className={styled.labelDietsCreate}>Diets</label>
                <div className={styled.containerDiets}>
                    {dietsList?.map((diet) => (
                        <div className={styled.containerInputDietsCreate} key={diet.id}>
                            <label htmlFor={diet.name} className={styled.labelDietsCheckbox} >{diet.name}</label>
                            <input type="checkbox" id={diet.name} value={diet.name} onChange={handleChangeDiet} className={styled.inputDietsCreate} />
                        </div>
                    ))}
                </div>
                <p>{errors.diets}</p>
                <div className={styled.containerButtonCreate}>
                    <button className={styled.buttonCreate} type="submit">Crear</button>
                </div>
            </form>
        </div>
     )
}

export default Form;